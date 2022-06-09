// import { createAction, handleActions } from "redux-actions";
// import { call, takeLatest } from "redux-saga/effects";

// 사가를 만들어 주어야 합니다.

// delay >> 설정된 시간 이후에 resolve하는 Promise객체를 리턴

// put >> 특정 액션을 dispatch하도록 합니다.
// put({type: 'INCREMENT'}) >> INCREMENT action을 dispath하도록 합니다.

// takeEvery >> 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
// takeEvery(INCREASE_ASYNC, increaseSaga) >> 들어오는 모든 INCRESE_ASYNC액션에 대해서 increaseSaga함수를 실행합니다.

// takeLatest는 기존에 처리 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 실행한다는 특징이 있습니다.

// call >> 함수의 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수가 됩니다.
// call(delay, 1000) >> delay(1000)함수를 call함수를 사용해서 이렇게 쓸 수도 있습니다.

// all >> 제너레이터 함수를 배열의 형태로 인자로 넣으면, 제너레이터 함수들이 병행적으로 실행됩니다.
// 그리고 전부 resolve될 때까지 기다립니다. Promise.all과 비슷합니다.
// yield.all([testSaga1(), testSaga2()]) >> testSaga1()과 testSaga2()가 동시에 실행되고, 모두 resolve될 때까지 기다립니다.
