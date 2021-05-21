import * as ActionTypes from "../Actions/helpers/actionType";
const INITIAL_STATE = {
  isLoading: false,
  errMsg: null,
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_AUTH:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        token: null,
        isAuthenticated: false,
      };

    case ActionTypes.SUCCESS_AUTH:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        errMsg: null,
        isAuthenticated: true,
      };

    case ActionTypes.ERROR_AUTH:
      return {
        ...state,
        token: null,
        isLoading: false,
        errMsg: action.payload,
        isAuthenticated: false,
      };
    case ActionTypes.LOGOUT_AUTH:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoading: false,
        errMsg: null,
        isAuthenticated: false,
      };
    default: {
      return state;
    }
  }
};
