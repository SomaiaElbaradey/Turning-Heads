import * as actionType from "../Actions/helpers/actionType";

export default (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_BLOGS:
      return action.payload;
    case actionType.FETCH_ONE_BLOG:
      return action.payload;
    case actionType.FETCH_USER_BLOGS:
      return action.payload;
    case actionType.ADD_BLOG:
      console.log("ff");
      return action.payload;
    default:
      return state;
  }
};
