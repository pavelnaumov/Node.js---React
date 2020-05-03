import { FETCH_USER } from "../actions/types";

const INIT_STATE = null;

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
