import { flow, Instance, types } from "mobx-state-tree";
import API from '../../services/axiosClient'

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

export const ProfileModel = types.model({
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
  following: types.array(types.string),
  follower: types.array(types.string),
}).actions(self => ({
  blockUser: flow(function* () {
    self.is_active = false
    yield API.blockUser(self._id)
  })
}));
