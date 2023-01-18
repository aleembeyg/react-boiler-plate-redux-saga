import { deletePostRequest } from "../../../../services/posts/post.services";
import { call, put, takeLatest, all } from "redux-saga/effects";
import POST_ACTION_TYPES from "../../../types/post/post.types";
import { deletePostRequestFailure, deletePostRequestSuccess } from "../../../actions/post/delete";

export function* DeletePostRequestAsync(body: any): any {
  try {
    const res = yield call(deletePostRequest, body.payload);
    yield put(deletePostRequestSuccess(res));
  } catch (error) {
    yield put(deletePostRequestFailure(error));
  }
}

export function* onDeletePostRequest() {
  yield takeLatest(POST_ACTION_TYPES.DELETE_POSTS_RERQUEST_START, DeletePostRequestAsync);
}

export function* deletePostSaga() {
  yield all([call(onDeletePostRequest)]);
}
