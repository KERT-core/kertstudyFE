import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트 입니다.
 */

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${palette.gray[2]};
`;

const PaddingBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  border-radius: 2px;
  background: white;
  padding: 2rem;
  width: 360px;
  .logo {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    a {
      color: black;
    }
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <PaddingBox>
        <div className="logo">
          <Link to="/">Welcome Back</Link>
          <p>Enter your credentials to access your account.</p>
        </div>
        {children}
      </PaddingBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
