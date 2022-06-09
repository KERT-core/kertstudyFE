import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

/**
 * 회원가입과 로그인 폼을 보여주는 컴포넌트 입니다.
 */

const AuthFormContainer = styled.div``;

const StyledInput = styled.input`
  font-size: 1rem;
  background-color: orange;
`;

const AuthForm = () => {
  return (
    <AuthFormContainer>
      <form>
        <StyledInput autoComplete="" />
        <StyledInput />
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
