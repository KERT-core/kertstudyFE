import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth: { login } }) => ({
    form: login,
  }));

  // 인풋을 변경했을 때 반응하는 핸들러
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 헨들러
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 컴포넌트가 처음 렌더링될 떄 form을 초기화 하는 작업이 있어야 함.
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
    />
  );
};

export default LoginForm;
