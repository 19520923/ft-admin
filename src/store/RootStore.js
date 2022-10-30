import { cast, types } from "mobx-state-tree";
import { persist } from "../library/mobx-persist";
import AppModel, { DEFAULT_STATE_APP } from "./models/AppModel";
import FoodModel from "./models/FoodModel";
import PostModel from "./models/PostModel";
import UserModel, { DEFAULT_STATE_PROFILE, UserDetailModel } from "./models/UserModel";

const RootStore = types
  .model({
    app: types.maybe(AppModel),
    profile: types.maybe(UserDetailModel),
    users: types.maybe(UserModel),
    posts: types.maybe(PostModel),
    foods: types.maybe(FoodModel),
  })
  .actions((self) => {
    const setProfile = (profile) => {
      self.profile = profile;
    }

    const getBlockedUsers = () => {
      return self.users.filter(user => {
        user.is_active === false
      })
    }

    return {
      setProfile,
      getBlockedUsers,
    }
  })
  .create({
    app: DEFAULT_STATE_APP,
    profile: DEFAULT_STATE_PROFILE,
  });

persist(
  "@rootStore",
  RootStore,
  {
    storage: null,
    jsonify: true,
  },
  {
    fetching: true,
  }
);

export default RootStore;
