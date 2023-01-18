import { combineReducers } from "redux";
import { addPostReducer } from "./reducers/post/add";
import { postListReducer } from "./reducers/post/list";
import { deletePostReducer } from "./reducers/post/delete";

export const rootReducer = combineReducers({
  posts: postListReducer,
  addPost: addPostReducer,
  deletePost: deletePostReducer,
});
