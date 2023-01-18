import { APIStatus } from "../../../../utils/index.utils";
import POST_ACTIONS_TYPE from "../../../types/post/post.types";

export const ADD_POST_INITIAL_STATE = {
  post: null,
  requestStatus: APIStatus.idle,
  error: null
};

export const addPostReducer = (state = ADD_POST_INITIAL_STATE, action: any) => {
  switch (action && action.type) {
    case POST_ACTIONS_TYPE.ADD_POST_RERQUEST_START:
      return {
        ...state,
        post: null,
        requestStatus: APIStatus.pending,
        error: null,
      };
    case POST_ACTIONS_TYPE.ADD_POST_RERQUEST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        requestStatus: APIStatus.success,
      };
    case POST_ACTIONS_TYPE.ADD_POST_RERQUEST_FAILURE:
      return {
        ...state,
        requestStatus: APIStatus.failure,
        error: action.payload.message || process.env.REACT_APP_API_CALL_GENERIC_ERROR_MESSAGE,
      };
    default:
      return state;
  }
};
