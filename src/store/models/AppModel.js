import { types } from "mobx-state-tree";

export const DEFAULT_STATE_APP = {
    isLoggedIn: false
}

const AppModel = types
  .model({
    isLoggedIn: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setIsLoggedIn: (isLoggedIn) => {
      self.isLoggedIn = isLoggedIn;
    },
  }));

export default AppModel
