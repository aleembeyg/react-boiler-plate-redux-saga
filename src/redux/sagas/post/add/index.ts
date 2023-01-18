import { addPostRequest, getPostsRequest } from "../../../../services/posts/post.services";
import { call, put, takeLatest, all } from "redux-saga/effects";
import POST_ACTION_TYPES from "../../../types/post/post.types";
import { addPostRequestFailure, addPostRequestSuccess } from "../../../actions/post/add";

export function* AddPostRequestAsync(body: any): any {
  try {
    const res = yield call(addPostRequest, body.payload);
    yield put(addPostRequestSuccess(res));
  } catch (error) {
    yield put(addPostRequestFailure(error));
  }
}

export function* onAddPostRequest() {
  yield takeLatest(POST_ACTION_TYPES.ADD_POST_RERQUEST_START, AddPostRequestAsync);
}

export function* addPostSaga() {
  yield all([call(onAddPostRequest)]);
}
