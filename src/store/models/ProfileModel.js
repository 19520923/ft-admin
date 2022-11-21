import { Instance, types } from "mobx-state-tree";

export const DEFAULT_STATE_PROFILE = {
  _id: "",
  name: "",
  username: "",
  email: "",
  cover_url: "",
  avatar_url: "",
  about: "",
  is_current: false,
  follower: [],
  following: [],
  is_active: false,
  num_report: 0,
  created_at: "",
  updated_at: "",
};

const profile_obj = {
  _id: types.identifier,
  name: types.string,
  username: types.string,
  email: types.string,
  cover_url: types.string,
  avatar_url: types.string,
  about: types.string,
  is_current: types.boolean,
  is_active: types.boolean,
  num_report: types.number,
  created_at: types.string,
};

export const ProfileModel = types.model({
  ...profile_obj,
  following: types.array(types.string),
  follower: types.array(types.string),
});
