import { types } from "mobx-state-tree";
import { DEFAULT_STATE_PROFILE, UserDetailModel } from "./UserModel";

export const DEFAULT_STATE_FOOD = {
  id: "",
  name: "",
  ingredients: [],
  recipt: [],
  score: 0,
  author: null,
  photo: "",
  num_rate: 0,
  is_active: true,
  created_at: "",
  rates: [],
};

const FoodRateModel = types.model({
  id: types.optional(types.string, ""),
  author: types.optional(types.maybe(UserDetailModel), DEFAULT_STATE_PROFILE),
  content: types.optional(types.string, ""),
  score: types.optional(types.number, 0),
  created_at: types.optional(types.string, ""),
});

export const FoodDetailModel = types.model({
  id: types.optional(types.string, ""),
  name: types.optional(types.string, ""),
  ingredients: types.optional(types.array(types.string), []),
  recipt: types.optional(types.array(types.string), []),
  score: types.optional(types.number, 0),
  author: types.optional(types.maybe(UserDetailModel), DEFAULT_STATE_PROFILE),
  photo: types.optional(types.string, ""),
  num_rate: types.optional(types.number, 0),
  is_active: types.optional(types.boolean, true),
  created_at: types.optional(types.string, ""),
  rates: types.optional(types.array(FoodRateModel), []),
});

const FoodModel = types.model({
  all: types.optional(types.array(FoodDetailModel), []),
  reported: types.optional(types.array(FoodDetailModel), []),
  hinden: types.optional(types.array(FoodDetailModel), []),
});

export default FoodModel;
