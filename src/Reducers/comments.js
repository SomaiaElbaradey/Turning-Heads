import * as actionType from "../Actions/helpers/actionType";

export const comments = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_BLOG_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};
