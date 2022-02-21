import { SEARCH_OUTPUT } from "./actionTypes";

const init = {};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "SEARCH_OUTPUT":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
