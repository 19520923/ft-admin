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
import Storage from "library/mobx-persist/storage";

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

    // luu account vào localStorage rồi truyền vào đây
    return this.login({
      email: "nguyennhattan12201@gmail.com",
      password: "123456789",
    })
      .then(async (data) => {
        await Storage.setItem(ACCESS_TOKEN, data.token);
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
   * It returns a promise that resolves to an array of users
   * @param [page=1] - The page number of the results you want to get.
   * @param [sort=username] - The field to sort by.
   * @param [search] - The search query.
   * @returns An array of users
   */
  getUsers(page, sort, search) {
    return this.axios.get(`/users?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get request with the is_active parameter,
   * otherwise return the axios.get request without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=username] - the column to sort by
   * @param [search] - string
   * @returns The return value is a promise.
   */
  getActiveUsers(page, sort, key) {
    return this.axios.get(
      `/users?q=${key}&sort=${sort}&page=${page}&limit=${LIMIT}&is_active=true`
    );
  }

  getReportedUsers(page, sort, key) {
    return this.axios.get(`/users/list/reported?q=${key}&sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get request with the is_active parameter,
   * otherwise return the axios.get request without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=username] - the column to sort by
   * @param [search] - string
   * @returns The return value is a promise.
   */
  getDeactiveUsers(page, sort, key) {
    return this.axios.get(
      `/users?q=${key}&sort=${sort}&page=${page}&limit=${LIMIT}&is_active=false`
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
   * It block a user
   * @param user_id - The user ID of the user you want to active.
   * @returns The return value of the function is the return value of the axios.delete method.
   */
  activeUser(user_id) {
    return this.axios.post(`/users/${user_id}`);
  }

  /**
   * "Get all posts from the API, sorted by the sort parameter, and return the response."
   *
   * The function takes two parameters: page and sort. The page parameter is the page number of the posts
   * to get, and the sort parameter is the sort order of the posts to get
   * @param [page=1] - The page number of the posts you want to get.
   * @param [sort=-created_at] - The order in which you want the posts to be sorted.
   * @returns An array of posts
   */
  getAllPosts(page, sort) {
    return this.axios.get(`/posts?sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get() with the is_active parameter,
   * otherwise return the axios.get() without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=-created_at] - -created_at (descending order)
   * @returns The return value is a promise.
   */
  getAllActivePosts(page, sort) {
    return this.axios.get(`/posts?sort=${sort}&page=${page}&limit=${LIMIT}&is_active=true`);
  }

  getAllReportedPosts(page, sort) {
    return this.axios.get(`/posts/list/reported?sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get() with the is_active parameter,
   * otherwise return the axios.get() without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=-created_at] - -created_at (descending order)
   * @returns The return value is a promise.
   */
  getAllDeactivePosts(page, sort) {
    return this.axios.get(`/posts?sort=${sort}&page=${page}&limit=${LIMIT}&is_active=false`);
  }

  /**
   * It returns a promise that resolves to an array of posts.
   * @param [page=1] - The page number of the results to fetch.
   * @param [sort=-created_at] - -created_at
   * @param [user_id] - the id of the user
   * @returns The return value is a promise.
   */
  getUserActivePosts(user_id, page, sort) {
    return this.axios.get(
      `/posts/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}&is_active=true`
    );
  }

  /**
   * It returns a promise that resolves to an array of posts
   * @param [user_id] - The user id of the user whose posts you want to fetch.
   * @param [page=1] - The page number of the posts you want to get.
   * @param [sort=-created_at] - The order in which you want the posts to be sorted.
   * @returns An array of posts
   */
  getUserPosts(user_id, page, sort) {
    return this.axios.get(`/posts/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * It returns a promise that resolves to an array of posts.
   * @param [page=1] - The page number of the results to fetch.
   * @param [sort=-created_at] - -created_at
   * @param [user_id] - the id of the user
   * @returns The return value is a promise.
   */
  getUserDeactivePosts(user_id, page, sort) {
    return this.axios.get(
      `/posts/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}&is_active=false`
    );
  }

  /**
   * It returns a promise that resolves to an array of comments for a given post.
   * @param [page=1] - The page number.
   * @param post_id - the id of the post
   * @returns The return value is a promise.
   */
  getPostComments(post_id, page) {
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
  deactivePost(post_id) {
    console.log("calling api deactivePost");
    return this.axios.delete(`/posts/${post_id}`);
  }

  /**
   * It block a post.
   * @param post_id - The id of the post to be activate
   * @returns The return value of the function is the return value of the axios.post() function.
   */
  activePost(post_id) {
    console.log("calling api activePost");
    return this.axios.post(`/posts/${post_id}`);
  }

  /**
   * It returns a promise that will resolve to an array of food objects
   * @param [page=1] - The page number of the results you want to get.
   * @param [search] - The search query.
   * @param [sort=name] - The field to sort by.
   * @returns An array of objects.
   */
  getFoods(page, search, sort) {
    return this.axios.get(`/foods?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get request with the is_active parameter,
   * otherwise return the axios.get request without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=name] - the column to sort by
   * @param [search] - search query
   * @returns The return value is the result of the axios.get() method.
   */
  getActiveFoods(page, search, sort) {
    return this.axios.get(
      `/foods?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}&is_active=true`
    );
  }

  getReportedFoods(page, search, sort) {
    return this.axios.get(
      `/foods/list/reported?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}`
    );
  }

  /**
   * If is_active is not an empty string, then return the axios.get request with the is_active parameter,
   * otherwise return the axios.get request without the is_active parameter.
   * @param [page=1] - the page number
   * @param [sort=name] - the column to sort by
   * @param [search] - search query
   * @returns The return value is the result of the axios.get() method.
   */
  getDeactiveFoods(page, search, sort) {
    return this.axios.get(
      `/foods?q=${search}&sort=${sort}&page=${page}&limit=${LIMIT}&is_active=false`
    );
  }

  /**
   * This function gets the foods for a user
   * @param [page=1] - The page number of the results you want to get.
   * @param [user_id] - The user id of the user whose foods you want to get.
   * @param [sort=-created_at] - The order in which the foods are sorted.
   * @returns An array of objects.
   */
  getUserFoods(page, user_id, sort) {
    return this.axios.get(`/foods/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}`);
  }

  /**
   * If is_active is not an empty string, then return the axios.get request with the is_active parameter,
   * otherwise return the axios.get request without the is_active parameter.
   * @param [is_active] - true or false
   * @param [page=1] - the page number
   * @param [sort=-created_at] - the order in which the foods are sorted
   * @param [user_id] - the id of the user
   * @returns The return value is a promise.
   */
  getUserActiveFoods(page, user_id, sort) {
    return this.axios.get(
      `/foods/${user_id}?sort=${sort}&page=${page}&limit=${LIMIT}&is_active=true`
    );
  }

  /**
   * It gets the food rates of a food item.
   * @param [page=1] - the page number
   * @param food_id - the id of the food
   * @returns The return value is a promise.
   */
  getFoodRates(food_id, page) {
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
  deactiveFood(food_id) {
    return this.axios.delete(`/foods/${food_id}`);
  }

  /**
   * It takes a food_id as an argument and returns a promise that resolves to the response from the
   * server
   * @param food_id - The id of the food you want to activate.
   * @returns A promise
   */
  activeFood(food_id) {
    return this.axios.post(`/foods/${food_id}/activate`);
  }

  /**
   * It returns a promise that resolves to an array of notifications.
   * @param [page=1] - The page number of the notifications you want to retrieve.
   * @returns An object with a data property that contains an array of objects.
   */
  getAllNotifications(page) {
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

export default new AxiosClient();
