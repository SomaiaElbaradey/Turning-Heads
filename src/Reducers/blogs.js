import * as actionType from "../Actions/helpers/actionType";

export default (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_BLOGS:
    case actionType.FETCH_ONE_BLOG:
    case actionType.FETCH_USER_BLOGS:
      return action.payload;
    default:
      return state;
  }
};
