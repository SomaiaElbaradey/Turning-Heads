import * as actionType from "../../Actions/helpers/actionType";

export const myBlogs = (state = []  , action) => {
  switch (action.type) {
    case actionType.FETCH_USER_BLOGS:
      return action.payload;
    default:
      return state;
  }
};
