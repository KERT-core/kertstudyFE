import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/posts";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes("post/READ_POST");

const UNLOAD_POST = "post/UNLOAD_POST";

// 스터디 ( POST )에 참여하는 액션
const [JOIN_POST, JOIN_POST_SUCCESS, JOIN_POST_FAILURE] =
  createRequestActionTypes("post/JOIN_POST");

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

/**
 * idInfo는 {postId, userId}이런 형태로 주어져야 한다.
 */
export const joinPost = createAction(
  JOIN_POST,
  (idInfo) => idInfo
);

const readPostSaga = createRequestSaga(
  READ_POST,
  postAPI.readPost
);

const joinPostSaga = createRequestSaga(
  JOIN_POST,
  postAPI.likePost
);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(JOIN_POST, joinPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [JOIN_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [JOIN_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState
);

export default post;
