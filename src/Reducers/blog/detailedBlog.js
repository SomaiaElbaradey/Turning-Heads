import * as actionType from "../../Actions/helpers/actionType";

export const detailedBlog = (state = []  , action) => {
  switch (action.type) {
    case actionType.FETCH_ONE_BLOG:
      return action.payload;
    default:
      return state;
  }
};
