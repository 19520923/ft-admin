import axios from "axios";
import _ from "lodash";
import axiosRetry from "axios-retry";
import { RETRY_DELAY, RETRY_NUMBER, RETRY_STATUS_CODE } from "constants/retry";
import {
  BASE_URL,
  AXIOS_TIMEOUT,
  UNAUTHORIZED,
  ACCESS_TOKEN,
  MASTER_KEY,
  LIMIT,
} from "constants/constants";

class AxiosClient {
  /* Creating an axios object. */
  constructor() {
    this.failedQueue = [];
    this.isRefreshing = false;
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: AXIOS_TIMEOUT,
    });

    /* A function that retries the request when the request fails. */
    axiosRetry(this.axios, {
      retries: RETRY_NUMBER,
      retryDelay: () => RETRY_DELAY,
      retryCondition: (error) => {
        const statusCode = _.get(error, "request.status");
        return RETRY_STATUS_CODE.includes(statusCode);
      },
    });

    /* Adding an interceptor to the axios object. */
    this.axios.interceptors.request.use(
      async (config) => {
        const accessToken = await Storage.getItem(ACCESS_TOKEN);
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    /* An interceptor that intercepts the response from the server. */
    this.axios.interceptors.response.use(
      (response) => {
        const success = _.get(response, "data.success");
        if (!success) {
          const message = _.get(response, "data.message");
          const originalRequest = response.config;
          if (message === UNAUTHORIZED) {
            return this.retryCallAPIWhenTokenExpired(originalRequest);
          } else {
            throw new Error(`New error: ${JSON.stringify(message)}`);
          }
        }
        return response.data;
      },
      async (error) => {
        const originalRequest = error.config;
        const response = error.response;
        if (response.status === UNAUTHORIZED && !originalRequest._retry) {
          return this.retryCallAPIWhenTokenExpired(originalRequest);
        }
        const resError = _.get(error, "response.data", {});
        return Promise.reject(resError);
      }
    );
  }

  /**
   * It loops through the failedQueue array and resolves or rejects each promise in the array.
   * @param error - The error object that is returned from the server.
   * @param token - The token that was retrieved from the server.
   */
  processQueue(error, token) {
    this.failedQueue.forEach((queue) => {
      /** This is a queue to handle 401 error. */
      if (error) {
        queue.reject(error);
      } else {
        queue.resolve(token);
      }
    });
    this.failedQueue = [];
  }

  retryCallAPIWhenTokenExpired(originalRequest) {
    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers["Authorization"] = "Bearer " + token;
          return this.axios(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    originalRequest._retry = true;
    this.isRefreshing = true;

    return this.login(account)
      .then((data) => {
        /** Add token in to headers.Authorization */
        this.axios.defaults.headers.Authorization = "Bearer " + data.token;
        /** Resolve queue and try to send previous request with new token  */
        this.processQueue(null, data.token);
        return this.axios(originalRequest);
      })
      .catch((error) => {
        /** Reject error when cannot get accessToken from Native */
        return Promise.reject(new Error(error));
      })
      .finally(() => {
        /** set isRefreshing equal false */
        this.isRefreshing = false;
      });
  }

  /**
   * It takes a user's email and password, and sends it to the server, which then returns an access
   * token.
   * @param user_data - {email: "email@email.com", password: "password"}
   * @returns The response from the server.
   */
  login(user_data) {
    return this.axios.post(
      "/auth",
      { access_token: MASTER_KEY },
      {
        auth: {
          username: user_data.email,
          password: user_data.password,
        },
      }
    );
  }

  /**
   * It returns a promise that resolves to an array of users.
   * @param [page=1] - the page number
   * @param [sort=username] - the field to sort by username, name, email,...
   * @param [search] - the search query
   * @param [type=all] - all, reported, blocked
   * @returns The return value is a promise.
   */
  getAllUsers(page = 1, sort = "username", search = "", type = "all") {
    return this.axios.get(
      `/users?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}&type=${type}`
    );
  }

  /**
   * It block a user
   * @param user_id - The user ID of the user you want to block.
   * @returns The return value of the function is the return value of the axios.delete method.
   */
  blockUser(user_id) {
    return this.axios.delete(`/users/${user_id}`);
  }

  /**
   * It returns a promise that resolves to an array of posts.
   * @param [page=1] - the page number
   * @param [type=all] - all, reported, hide
   * @param [sort=-created_at] - created_at (descending order)
   * @returns An array of objects.
   */
  getAllPosts(page = 1, type = "all", sort = "-created_at") {
    return this.axios.get(`/posts?sort=${sort}&page=${page}&limit=${LIMIT}&type=${type}`);
  }

  /**
   * This function returns a promise that resolves to an array of objects, each object representing a
   * post.
   * @param [page=1] - The page number.
   * @param [type=all] - all, reported, blocked
   * @param [sort=-created_at] - created_at (default)
   * @param [user_id] - the user id of the user whose posts you want to fetch
   * @returns An array of objects.
   */
  getUserPosts(page = 1, type = "all", sort = "-created_at", user_id = "") {
    return this.axios.get(
      `/posts/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}&type=${type}`
    );
  }

  /**
   * It returns a promise that resolves to an array of comments for a given post.
   * @param [page=1] - The page number.
   * @param post_id - the id of the post
   * @returns The return value is a promise.
   */
  getPostComments(page = 1, post_id) {
    return this.axios.get(`/comments/${post_id}?page=${page}&limit=${LIMIT}`);
  }

  /**
   * It deletes a comment from the database.
   * @param comment_id - The id of the comment to delete.
   * @returns The return value of the deletePostComment function is the promise returned by the
   * axios.delete method.
   */
  deletePostComment(comment_id) {
    return this.axios.delete(`/comments/${comment_id}`);
  }

  /**
   * It block a post.
   * @param post_id - The id of the post to be deleted
   * @returns The return value of the function is the return value of the axios.delete() function.
   */
  blockPost(post_id) {
    return this.axios.delete(`/posts/${post_id}`);
  }

  /**
   * It returns a promise that resolves to an array of food objects.
   * @param [page=1] - the page number
   * @param [sort=name] - name, created_at,...
   * @param [search] - the search term
   * @param [type=all] - all, veg, non-veg
   * @returns The getAllFoods function returns a promise.
   */
  getAllFoods(page = 1, sort = "name", search = "", type = "all") {
    return this.axios.get(
      `/foods?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}&type=${type}`
    );
  }

  /**
   * This function returns a promise that resolves to an array of objects, each of which represents a
   * food item.
   * @param [page=1] - the page number
   * @param [type=all] - all, reported, hide
   * @param [sort=-created_at] - name, created_at,...
   * @param [user_id] - the user id of the user whose foods you want to get
   * @returns The getUserFoods function is returning a promise.
   */
  getUserFoods(page = 1, type = "all", sort = "-created_at", user_id = "") {
    return this.axios.get(
      `/foods/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}&type=${type}`
    );
  }

  /**
   * It gets the food rates of a food item.
   * @param [page=1] - the page number
   * @param food_id - the id of the food
   * @returns The return value is a promise.
   */
  getFoodRates(page = 1, food_id) {
    return this.axios.get(`/food-rates/${food_id}?page=${page}&limit=${LIMIT}`);
  }

  /**
   * It deletes a food rate by its id.
   * @param rate_id - The id of the rate you want to delete
   * @returns The return value of the function is the return value of the last statement in the function.
   */
  deleteFoodRate(rate_id) {
    return this.axios.delete(`/food-rates/${rate_id}`);
  }

  /**
   * It takes a food_id as an argument, and then it makes a DELETE request to the server, which hide
   * the food.
   * @param food_id - The id of the food you want to hide.
   * @returns The return value of the function is the promise returned by the axios.delete() method.
   */
  hideFood(food_id) {
    return this.axios.delete(`/foods/${food_id}`);
  }

  /**
   * It returns a promise that resolves to an array of notifications.
   * @param [page=1] - The page number of the notifications you want to retrieve.
   * @returns An object with a data property that contains an array of objects.
   */
  getAllNotifications(page = 1) {
    return this.axios.get(`/notifications?page=${page}&limit=${LIMIT}`);
  }

  /**
   * It takes in a notification object and sends it to the server. (It's not working)
   * @param notiData - {
   * @returns The return value of the function is the return value of the axios.post() call.
   */
  createNotification(notiData) {
    return this.axios.post(`/notifications`, notiData);
  }
}

export default AxiosClient();
