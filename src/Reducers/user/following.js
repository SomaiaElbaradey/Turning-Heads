import * as actionType from "../../Actions/helpers/actionType";

export const following = (state = [], action) => {
  switch (action.type) {
    case actionType.FOLLOWING:
      return action.payload;
    case actionType.FAILED_NAMES:
      return action.payload;
    default:
      return state;
  }
};
