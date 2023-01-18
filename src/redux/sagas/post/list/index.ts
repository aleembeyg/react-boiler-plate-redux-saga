import { getPostsRequest } from "../../../../services/posts/post.services";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { getPostsRequestFailure, getPostsRequestSuccess } from "../../../actions/post/list";
import POST_ACTION_TYPES from "../../../types/post/post.types";

export function* fetchPostsAsync(): any {
  try {
    const res = yield call(getPostsRequest);
    console.log(res)
    yield put(getPostsRequestSuccess(res));
  } catch (error) {
    yield put(getPostsRequestFailure(error));
  }
}

export function* onFetchPosts() {
  yield takeLatest(POST_ACTION_TYPES.GET_POSTS_RERQUEST_START, fetchPostsAsync);
}

export function* postsSaga() {
  yield all([call(onFetchPosts)]);
}
