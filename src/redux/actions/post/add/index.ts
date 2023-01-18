import { createAction } from "../../../../utils/index.utils";
import POST_ACTION_TYPES from "../../../types/post/post.types";

export const addPostRequest: any = (body: any) =>
  createAction(POST_ACTION_TYPES.ADD_POST_RERQUEST_START, body);

export const addPostRequestSuccess: any = (data: any) =>
  createAction(POST_ACTION_TYPES.ADD_POST_RERQUEST_SUCCESS, data);

export const addPostRequestFailure: any = (error: any) =>
  createAction(POST_ACTION_TYPES.ADD_POST_RERQUEST_FAILURE, error);
