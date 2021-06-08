import * as actionType from "../Actions/helpers/actionType";

export default (state = [], action) => {
  switch (action.type) {
    case actionType.FAILED_SIGNUP:
      return action.payload;
    case actionType.SUCCESS_SIGNUP:
      return action.payload;
    default:
      return state;
  }
};
