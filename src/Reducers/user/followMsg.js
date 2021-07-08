import * as actionType from "../../Actions/helpers/actionType";

export const followMsg = (state = false, action) => {
  switch (action.type) {
    case actionType.FAILED_USER:
      return action.payload;
    case actionType.NEW_FOLLOW:
      return action.payload;
    case actionType.UNFOLLOW:
      return action.payload;
    default:
      return state;
  }
};
