import * as actionType from "../../Actions/helpers/actionType";

export const crudMsg = (state = "", action) => {
  switch (action.type) {
    case actionType.ADD_BLOG:
      return action.payload;
    case actionType.ERROR_BLOG:
      return action.payload;
    case actionType.DELETE_BLOG:
      return action.payload;
    default:
      return state;
  }
};
