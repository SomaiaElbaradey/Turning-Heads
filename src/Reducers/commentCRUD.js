import * as actionType from "../Actions/helpers/actionType";

export const commentCRUD = (state = "", action) => {
  switch (action.type) {
    case actionType.ADD_COMMENT:
      return action.payload;
    case actionType.UPDATE_COMMENT:
      return action.payload;
    case actionType.DELETE_COMMENT:
      return action.payload;
    case actionType.ERROR_COMMENT:
      return action.payload;
    default:
      return state;
  }
};
