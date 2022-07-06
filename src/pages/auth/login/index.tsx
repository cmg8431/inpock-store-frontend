import React from "react";
import * as S from "./styled";
import { AppLayout, AuthLabelTextField, Button } from "src/components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hook/query";
import { LoginFormValues } from "src/api/user";

export const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { isLoading, mutate } = useLogin();
  const onSubmit = ({ username, password }: LoginFormValues) => {
    mutate({ username, password });
  };

  return (
    <AppLayout title="로그인" src="/mypage">
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <AuthLabelTextField
          importance
          className="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          style={{ marginBottom: "1rem" }}
          {...register("username", {})}
        />
        <AuthLabelTextField
          importance
          className="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이여야 합니다,",
            },
          })}
        />
        <S.LoginAuthFindWrapper>
          <S.LoginGoToLink to="/auth/find">아이디 / 비밀번호 찾기</S.LoginGoToLink>
        </S.LoginAuthFindWrapper>
        <Button variant="contained" type="submit">
          {isLoading ? <span>로딩중</span> : <span>로그인</span>}
        </Button>
        <Button variant="outlinedOrange" onClick={() => navigate("/auth/register/agree")}>
          3초만에 빠른 회원가입
        </Button>
        <S.LoginOrderInquiry>
          <S.LoginGoToLink style={{ marginTop: "1rem" }} to="/">
            비회원 주문 조회
          </S.LoginGoToLink>
        </S.LoginOrderInquiry>
      </S.LoginForm>
    </AppLayout>
  );
};
