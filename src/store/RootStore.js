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
const PostStore = types
  .model({
    rows: types.optional(types.array(PostModel), []),
    count: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  })
  .views((self) => ({
    getCommentsById(post_id) {
      const index = _.findIndex(self.rows, (e) => e._id === post_id);
      return self.rows[index].comments.rows;
    },
  }));

/* Creating a FoodStore model with the following properties:
rows: an array of FoodModel
count: a number
currentPage: a number */
const FoodStore = types.model({
  rows: types.optional(types.array(FoodModel), []),
  count: types.optional(types.number, 0),
  currentPage: types.optional(types.integer, 1),
});

/* Creating a UserStore model with the following properties:
rows: an array of ProfileModel
count: a number
currentPage: a number */
const UserStore = types
  .model({
    rows: types.optional(types.array(ProfileModel), []),
    count: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  })
  .actions((self) => ({}));

/* Creating a ProfileStore model with the following properties:
profile: a ProfileModel
foods: a FoodStore
posts: a PostStore */
const ProfileStore = types.model({
  profile: types.optional(ProfileModel, DEFAULT_STATE_PROFILE),
  foods: FoodStore,
  posts: PostStore,
  following: UserStore,
  follower: UserStore,
});

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
      try {
        const { rows, count } = yield API.getAllNotifications(1);
        self.rows = cast(rows);
        self.count = count;
        self.currentPage = 2;
      } catch (error) {
        console.log(error);
      }
    }),
    loadNoti: flow(function* () {
      try {
        const { rows } = yield API.getAllNotifications(self.currentPage);
        self.rows.push(...rows);
        self.currentPage++;
      } catch (error) {
        console.log(error);
      }
    }),
  }));

export const RootStore = types
  .model({
    profile: ProfileModel,
    users: types.model({
      all: UserStore,
      active: UserStore,
      block: UserStore,
    }),
    foods: types.model({
      all: FoodStore,
      active: FoodStore,
      block: FoodStore,
    }),
    posts: types.model({
      all: PostStore,
      active: PostStore,
      block: PostStore,
    }),
    selectedUser: ProfileStore,
    notifications: NotificationStore,
    isLoggedIn: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    /* Setting the isLoggedIn to the isLoggedIn that is passed in. */
    setIsLoggedIn: (isLoggedIn) => {
      self.isLoggedIn = isLoggedIn;
    },

    getUsers: flow(function* (sort = "username", key = "") {
      const { count, rows } = yield API.getUsers(1, sort, key);
      self.users.all.rows = cast(rows);
      self.users.all.count = count;
      self.users.all.currentPage = 2;
    }),
    getActiveUsers: flow(function* (sort = "username", key = "") {
      const { count, rows } = yield API.getActiveUsers(1, sort, key);
      self.users.active.rows = cast(rows);
      self.users.active.count = count;
      self.users.active.currentPage = 2;
    }),
    getDeactiveUsers: flow(function* (sort = "username", key = "") {
      const { count, rows } = yield API.getDeactiveUsers(1, sort, key);
      self.users.block.rows = cast(rows);
      self.users.block.count = count;
      self.users.block.currentPage = 2;
    }),
  }))
  .create({
    profile: DEFAULT_STATE_PROFILE,
    users: {
      all: DEFAULT_LIST_STATE,
      active: DEFAULT_LIST_STATE,
      block: DEFAULT_LIST_STATE,
    },
    selectedUser: {
      profile: DEFAULT_STATE_PROFILE,
      posts: DEFAULT_LIST_STATE,
      foods: DEFAULT_LIST_STATE,
      follower: DEFAULT_LIST_STATE,
      following: DEFAULT_LIST_STATE,
    },
    posts: {
      all: DEFAULT_LIST_STATE,
      active: DEFAULT_LIST_STATE,
      block: DEFAULT_LIST_STATE,
    },
    foods: {
      all: DEFAULT_LIST_STATE,
      active: DEFAULT_LIST_STATE,
      block: DEFAULT_LIST_STATE,
    },
    notifications: DEFAULT_LIST_STATE,
    isLoggedIn: false,
  });

// /* Persisting the root store. */
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
