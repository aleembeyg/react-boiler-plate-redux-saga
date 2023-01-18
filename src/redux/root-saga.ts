import { all, call, fork } from "redux-saga/effects";
import { addPostSaga } from "./sagas/post/add";
import { deletePostSaga } from "./sagas/post/delete";
import { postsSaga } from "./sagas/post/list";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(addPostSaga), fork(deletePostSaga)]);
}
