import { types, Instance, cast } from "mobx-state-tree";
import FoodModel from "./FoodModel";
import { ProfileModel } from "./ProfileModel";
import _ from "lodash";

export const DEFAULT_STATE_POST = {
  _id: "",
  foods: [],
  content: "",
  photos: [],
  reactions: [],
  num_comment: 0,
  author: {},
  location: null,
  created_at: "",
  comments: [],
};

const LocationModel = types.model({
  name: types.string,
  lat: types.string,
  lng: types.string,
});

const CommentModel = types.model({
  _id: types.identifier,
  author: ProfileModel,
  content: types.string,
  parent: types.maybeNull(types.string),
  created_at: types.string,
});

const CommnetStore = types
  .model({
    rows: types.optional(types.array(CommentModel), []),
    count: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  })
  .actions((self) => ({
    setComment: (comments, count) => {
      self.rows = cast(_.unionBy(self.rows, comments, "_id"));
      self.count = count;
      self.currentPage = 2;
    },
  }));

export const PostModel = types.model({
  _id: types.identifier,
  foods: types.array(FoodModel),
  content: types.string,
  photos: types.array(types.string),
  reactions: types.array(types.string),
  num_comment: types.number,
  author: ProfileModel,
  location: LocationModel,
  created_at: types.string,
  comments: types.optional(CommnetStore, {
    rows: [],
    count: 0,
    currentPage: 1,
  }),
  is_public: types.boolean,
  is_active: types.boolean,
  num_report: types.number,
  created_at: types.string,
});

export default PostModel;
