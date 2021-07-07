import * as actionType from "../Actions/helpers/actionType";

export const user = (state = {}, action) => {
  switch (action.type) {
    case actionType.FAILED_USER:
      return action.payload;
    case actionType.FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
