import * as actionType from "../Actions/helpers/actionType";

export const oneComment = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_ONE_COMMENT:
      return action.payload;
    default:
      return state;
  }
};
