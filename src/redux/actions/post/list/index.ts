import { createAction } from "../../../../utils/index.utils";
import POST_ACTION_TYPES from "../../../types/post/post.types";

export const getPostsRequest: any = () =>
  createAction(POST_ACTION_TYPES.GET_POSTS_RERQUEST_START);

export const getPostsRequestSuccess: any = (data: any) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_RERQUEST_SUCCESS, data);

export const getPostsRequestFailure: any = (error: any) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_RERQUEST_FAILURE, error);
