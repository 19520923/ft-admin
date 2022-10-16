/* Importing the types from the mobx-state-tree library. */
import { types } from "mobx-state-tree";

export const DEFAULT_STATE_PROFILE = {
  id: "",
  name: "",
  avatar_url: "",
  cover_url: "",
  email: "",
  username: "",
  about: "",
  created_at: "",
  last_login: "",
  is_active: true,
  is_current: false,
  is_verified: true,
  follower: [],
  following: [],
};

const profile_obj = {
  id: types.optional(types.string, ""),
  name: types.optional(types.string, ""),
  avatar_url: types.optional(types.string, ""),
  cover_url: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  username: types.optional(types.string, ""),
  about: types.optional(types.string, ""),
  created_at: types.optional(types.string, ""),
  last_login: types.optional(types.string, ""),
  is_active: types.optional(types.boolean, true),
  is_current: types.optional(types.boolean, false),
  is_verified: types.optional(types.boolean, true),
};

const ProfileModel = types.model({
  ...profile_obj,
});

export const UserDetailModel = types.model({
  ...profile_obj,
  following: types.optional(types.array(ProfileModel), []),
  follower: types.optional(types.array(ProfileModel), []),
});

const UserModel = types.model({
  all: types.optional(types.array(UserDetailModel), []),
  reported: types.optional(types.array(UserDetailModel), []),
  blocked: types.optional(types.array(UserDetailModel), []),
});

export default UserModel;
