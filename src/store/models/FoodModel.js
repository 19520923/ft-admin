import { flow, types, cast } from "mobx-state-tree";
import { ProfileModel } from "./ProfileModel";
import API from "../../services/axiosClient";

export const DEFAULT_STATE_FOOD = {
  _id: "",
  name: "",
  ingredients: [],
  recipe: [],
  score: 0,
  author: {},
  photo: "",
  num_rate: 0,
  created_at: "",
  rates: [],
};

const FoodRateModel = types.model({
  _id: types.identifier,
  author: ProfileModel,
  content: types.string,
  score: types.number,
  created_at: types.string,
});

const RateStore = types.model({
  rows: types.optional(types.array(FoodRateModel), []),
  count: types.integer,
  currentPage: types.integer,
});

const FoodModel = types.model({
  _id: types.identifier,
  name: types.string,
  ingredients: types.array(types.string),
  recipe: types.array(types.string),
  score: types.number,
  author: ProfileModel,
  photo: types.string,
  num_rate: types.number,
  created_at: types.string,
  rates: types.optional(RateStore, {
    rows: [],
    count: 0,
    currentPage: 1,
  }),
  is_active: types.boolean,
  num_report: types.number,
  created_at: types.string,
}).actions(self => ({
  blockFood: flow(function* () {
    self.is_active = false
    yield API.deactiveFood(self._id)
  }),
  unblockFood: flow(function* () {
    self.is_active = true
    yield API.activeFood(self._id)
  }),
  getRates: flow(function* () {
    const {count, rows} =  yield API.getFoodRates(self._id, 1)
    self.rates.rows = cast(rows)
    self.rates.count = cast(count)
    self.rates.currentPage = 1
  }),
}));

export default FoodModel;
