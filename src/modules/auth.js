import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 회원의 로그인 인증과 관련된 리덕스
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FIORM";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register || login
    key, // username, password, passwordConfirm
    value, // 실제로 내가 바꾸려는 값
  })
);

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form) => form
); // register

// 또한 나중에 register -> login || login -> register로 가면 둘중 하나는 초기화 해 주는 작업이 필요하다.
// 여기에다가 로그인 폼 데이터를 저장해야 한다.
const initialState = {
  register: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    email: "",
    password: "",
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      // 리덕스는 불변성을 유지해 줘야 한다.
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
