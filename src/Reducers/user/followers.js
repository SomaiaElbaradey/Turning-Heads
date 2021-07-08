import * as actionType from "../../Actions/helpers/actionType";

export const followers = (state = [], action) => {
  switch (action.type) {
    case actionType.FOLLOWER:
      return action.payload;
    case actionType.FAILED_NAMES:
      return action.payload;
    default:
      return state;
  }
};
