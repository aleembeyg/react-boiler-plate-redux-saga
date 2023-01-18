import { createAction } from "../../../../utils/index.utils";
import POST_ACTION_TYPES from "../../../types/post/post.types";

export const deletePostRequest: any = (id: number) =>
  createAction(POST_ACTION_TYPES.DELETE_POSTS_RERQUEST_START, id);

export const deletePostRequestSuccess: any = (data: any) =>
  createAction(POST_ACTION_TYPES.DELETE_POSTS_RERQUEST_SUCCESS, data);

export const deletePostRequestFailure: any = (error: any) =>
  createAction(POST_ACTION_TYPES.DELETE_POSTS_RERQUEST_FAILURE, error);
