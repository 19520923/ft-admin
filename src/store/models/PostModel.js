import { types } from "mobx-state-tree";
import { FoodDetailModel } from "./FoodModel";
import { DEFAULT_STATE_PROFILE, UserDetailModel } from "./UserModel";

export const DEFAULT_STATE_POST = {
  id: "",
  foods: [],
  content: "",
  photos: [],
  reactions: [],
  num_comment: 0,
  author: null,
  location: null,
  is_public: true,
  is_active: true,
  created_at: "",
  comments: [],
};

const LocationModel = types.model({
  name: types.optional(types.string, ""),
  lat: types.optional(types.string, ""),
  lng: types.optional(types.string, ""),
});

const CommentModel = types.model({
  id: types.optional(types.string, ""),
  author: types.optional(types.maybe(UserDetailModel), DEFAULT_STATE_PROFILE),
  content: types.optional(types.string, ""),
  parent: types.optional(types.string, ""),
  created_at: types.optional(types.string, ""),
});

const PostDetailModel = types.model({
  id: types.optional(types.string, ""),
  foods: types.optional(types.array(FoodDetailModel), []),
  content: types.optional(types.string, ""),
  photos: types.optional(types.array(types.string), []),
  reactions: types.optional(types.array(types.string), []),
  num_comment: types.optional(types.number, 0),
  author: types.optional(types.maybe(UserDetailModel), DEFAULT_STATE_PROFILE),
  location: types.optional(types.maybe(LocationModel), {
    name: "",
    lat: "",
    lng: "",
  }),
  is_public: types.optional(types.boolean, true),
  is_active: types.optional(types.boolean, true),
  comments: types.optional(types.array(CommentModel), []),
  created_at: types.optional(types.string, ""),
});

const PostModel = types.model({
  all: types.optional(types.array(PostDetailModel), []),
  reported: types.optional(types.array(PostDetailModel), []),
  blocked: types.optional(types.array(PostDetailModel), []),
});

export default PostModel;
