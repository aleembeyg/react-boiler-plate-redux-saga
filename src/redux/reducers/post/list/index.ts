import { APIStatus } from "../../../../utils/index.utils";
import POST_ACTIONS_TYPE from "../../../types/post/post.types";

export const POST_INITIAL_STATE = {
  posts: [] as any,
  requestStatus: APIStatus.idle,
  error: {} as any
};

export const postListReducer = (state = POST_INITIAL_STATE, action: any) => {
  switch (action && action.type) {
    case POST_ACTIONS_TYPE.GET_POSTS_RERQUEST_START:
      return {
        ...state,
        posts: null,
        requestStatus: APIStatus.pending,
        error: null,
      };
    case POST_ACTIONS_TYPE.GET_POSTS_RERQUEST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        requestStatus: APIStatus.success,
      };
    case POST_ACTIONS_TYPE.GET_POSTS_RERQUEST_FAILURE:
      return {
        ...state,
        requestStatus: APIStatus.failure,
        error: action.payload.message || process.env.REACT_APP_API_CALL_GENERIC_ERROR_MESSAGE,
      };
    default:
      return state;
  }
};
