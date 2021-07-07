import * as ActionTypes from "../../Actions/helpers/actionType";
const INITIAL_STATE = {
  isLoading: false,
  errMsg: null,
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ActionTypes.LOADING_AUTH:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     errMsg: null,
    //     token: null,
    //     user: null,
    //     isAuthenticated: false,
    //   };
    case ActionTypes.SUCCESS_AUTH:
      return {
        ...state,
        token: action.payload.webToken,
        user: action.payload.user,
        isLoading: false,
        errMsg: null,
        isAuthenticated: true,
      };
    case ActionTypes.ERROR_AUTH:
      return {
        ...state,
        token: null,
        isLoading: false,
        user: null,
        errMsg: action.payload,
        isAuthenticated: false,
      };
    case ActionTypes.LOGOUT_AUTH:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        isLoading: false,
        errMsg: null,
        user: null,
        isAuthenticated: false,
      };
    default: {
      return state;
    }
  }
};
