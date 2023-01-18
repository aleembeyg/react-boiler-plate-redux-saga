import { APIStatus } from "../../../../utils/index.utils";
import POST_ACTIONS_TYPE from "../../../types/post/post.types";

export const DELETE_POST_INITIAL_STATE = {
  id: null,
  post: null,
  requestStatus: APIStatus.idle,
  error: null,
};

export const deletePostReducer = (
  state = DELETE_POST_INITIAL_STATE,
  action: any
) => {
  switch (action && action.type) {
    case POST_ACTIONS_TYPE.DELETE_POSTS_RERQUEST_START:
      return {
        ...state,
        id: action.payload,
        requestStatus: APIStatus.pending,
        post: null,
        error: null,
      };
    case POST_ACTIONS_TYPE.DELETE_POSTS_RERQUEST_SUCCESS:
      return {
        ...state,
        id: null,
        post: action.payload,
        requestStatus: APIStatus.success,
      };
    case POST_ACTIONS_TYPE.DELETE_POSTS_RERQUEST_FAILURE:
      return {
        ...state,
        requestStatus: APIStatus.failure,
        error:
          action.payload.message ||
          process.env.REACT_APP_API_CALL_GENERIC_ERROR_MESSAGE,
      };
    default:
      return state;
  }
};
