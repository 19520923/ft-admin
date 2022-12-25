import { cast, flow, types } from "mobx-state-tree";
import FoodModel from "./models/FoodModel";
import PostModel from "./models/PostModel";
import { ProfileModel, DEFAULT_STATE_PROFILE } from "./models/ProfileModel";
import _ from "lodash";
import { persist } from "../library/mobx-persist";
import API from "../services/axiosClient";
import NotificationModel from "./models/NotificationModel";

const DEFAULT_LIST_STATE = {
  rows: [],
  count: 0,
  currentPage: 1,
};

/* Creating a PostStore model with the following properties:
rows: an array of PostModel
count: a number
currentPage: a number */
const PostStore = types.model({
  rows: types.optional(types.array(PostModel), []),
  count: types.optional(types.number, 0),
  currentPage: types.optional(types.number, 1),
});

/* Creating a FoodStore model with the following properties:
rows: an array of FoodModel
count: a number
currentPage: a number */
const FoodStore = types.model({
  rows: types.optional(types.array(FoodModel), []),
  count: types.optional(types.number, 0),
  currentPage: types.optional(types.integer, 1),
});

/* Creating a ProfileStore model with the following properties:
profile: a ProfileModel
foods: a FoodStore
posts: a PostStore */
const ProfileStore = types.model({
  profile: types.optional(ProfileModel, DEFAULT_STATE_PROFILE),
  foods: types.optional(FoodStore, DEFAULT_LIST_STATE),
  posts: types.optional(PostStore, DEFAULT_LIST_STATE),
  following: types.optional(types.array(ProfileModel), []),
  follower: types.optional(types.array(ProfileModel), []),
});

/* Creating a UserStore model with the following properties:
rows: an array of ProfileModel
count: a number
currentPage: a number */
const UserStore = types
  .model({
    rows: types.optional(types.array(ProfileStore), []),
    count: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  }).views(self => ({
    getUserById: (user_id) => {
      const index = _.findIndex(self.rows, e => e.profile._id === user_id)
      return self.rows[index].profile
    }
  }))
  .actions((self) => ({}));

/* Creating a NotificationStore model with the following properties:
rows: an array of NotificationModel
count: a number
currentPage: a number */
const NotificationStore = types
  .model({
    rows: types.optional(types.array(NotificationModel), []),
    count: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  })
  .actions((self) => ({
    /* Setting the notifications. */
    setNoti: flow(function* () {
      const { rows, count } = yield API.getAllNotifications(1);
      self.rows = cast(rows);
      self.count = count;
      self.currentPage = 2;
    }),
    loadNoti: flow(function* () {
      const { rows } = yield API.getAllNotifications(self.currentPage);
      self.rows.push(...rows);
      self.currentPage++;
    }),
  }));

export const RootStore = types
  .model({
    profile: ProfileModel,
    users: types.model({
      all: UserStore,
      reported: UserStore,
      blocked: UserStore,
    }),
    foods: types.model({
      all: FoodStore,
      reported: FoodStore,
      blocked: FoodStore,
    }),
    posts: types.model({
      all: PostStore,
      reported: PostStore,
      blocked: PostStore,
    }),
    notifications: NotificationStore,
    isLoggedIn: types.optional(types.boolean, false),
    numTabOnProfile: types.enumeration(['posts', 'foods', 'followers', 'followings']),
    selectedPost: types.maybeNull(PostModel)
  })
  .actions((self) => ({
    /* Setting the isLoggedIn to the isLoggedIn that is passed in. */
    setIsLoggedIn: (isLoggedIn) => {
      self.isLoggedIn = isLoggedIn;
    },

    getUsers: flow(function* (page = 1, sort = "username", key = "") {
      const { count, rows } = yield API.getUsers(page, sort, key);
      self.users.all.rows = cast(rows.map((row) => ({ profile: row })));
      self.users.all.count = count;
      self.users.all.currentPage = page;
    }),
    getReportedUsers: flow(function* (page = 1, sort = "username", key = "") {
      const { count, rows } = yield API.getReportedUsers(page, sort, key);
      self.users.reported.rows = cast(rows.map((row) => ({ profile: row })));
      self.users.reported.count = count;
      self.users.reported.currentPage = page;
    }),
    getBlockedUsers: flow(function* (page = 1, sort = "username", key = "") {
      const { count, rows } = yield API.getDeactiveUsers(page, sort, key);
      self.users.blocked.rows = cast(rows.map((row) => ({ profile: row })));
      self.users.blocked.count = count;
      self.users.blocked.currentPage = page;
    }),

    getFoods: flow(function* (page = 1, sort = "name", key = "") {
      const { count, rows } = yield API.getFoods(page, key, sort);
      self.foods.all.rows = cast(rows);
      self.foods.all.count = count;
      self.foods.all.currentPage = page;
    }),
    getReportedFoods: flow(function* (page = 1, sort = "name", key = "") {
      const { count, rows } = yield API.getReportedFoods(page, key, sort);
      self.foods.reported.rows = cast(rows);
      self.foods.reported.count = count;
      self.foods.reported.currentPage = page;
    }),
    getBlockedFoods: flow(function* (page = 1, sort = "name", key = "") {
      const { count, rows } = yield API.getDeactiveFoods(page, key, sort);
      self.foods.blocked.rows = cast(rows);
      self.foods.blocked.count = count;
      self.foods.blocked.currentPage = page;
    }),

    getPosts: flow(function* (page = 1, sort = "-created_at") {
      const { count, rows } = yield API.getAllPosts(page, sort);
      self.posts.all.rows = cast(rows);
      self.posts.all.count = count;
      self.posts.all.currentPage = page;
    }),
    getReportedPosts: flow(function* (page = 1, sort = "-created_at") {
      const { count, rows } = yield API.getAllReportedPosts(page, sort);
      self.posts.reported.rows = cast(rows);
      self.posts.reported.count = count;
      self.posts.reported.currentPage = page;
    }),
    getBlockedPosts: flow(function* (page = 1, sort = "-created_at") {
      const { count, rows } = yield API.getAllDeactivePosts(page, sort, key);
      self.posts.blocked.rows = cast(rows);
      self.posts.blocked.count = count;
      self.posts.blocked.currentPage = page;
    }),
    setNumTabOnProfile: (num) => {
      switch (num) {
        case 0:
          self.numTabOnProfile = 'posts';
          break;
        case 1:
          self.numTabOnProfile = 'foods';
          break;
        case 2:
          self.numTabOnProfile = 'followers';
          break;
        case 3:
          self.numTabOnProfile = 'followings';
          break;
        default:
          self.numTabOnProfile = 'posts';
          break;
      }
    },
    setSelectedPost: (post) => {
      self.selectedPost = cast(post);
    },

  }))
  .create({
    profile: DEFAULT_STATE_PROFILE,
    users: {
      all: DEFAULT_LIST_STATE,
      reported: DEFAULT_LIST_STATE,
      blocked: DEFAULT_LIST_STATE,
    },
    posts: {
      all: DEFAULT_LIST_STATE,
      reported: DEFAULT_LIST_STATE,
      blocked: DEFAULT_LIST_STATE,
    },
    foods: {
      all: DEFAULT_LIST_STATE,
      reported: DEFAULT_LIST_STATE,
      blocked: DEFAULT_LIST_STATE,
    },
    notifications: DEFAULT_LIST_STATE,
    isLoggedIn: false,
    numTabOnProfile: 'posts',
    selectedPost: null
  });

/* Persisting the root store. */
// persist(
//   "@rootStore",
//   RootStore,
//   {
//     jsonify: true,
//   },
//   {
//     fetching: true,
//   }
// );
