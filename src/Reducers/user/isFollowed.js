import * as actionType from "../../Actions/helpers/actionType";

export const isFollowed = (state = false, action) => {
  switch (action.type) {
    case actionType.FAILED_USER:
      return action.payload;
    case actionType.IS_FOLLOWED:
      return action.payload;
    default:
      return state;
  }
};
