/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import * as S from "./styled";
import { AppLayout, Button, TextField, Toast } from "src/components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hook/query";
import { LoginFormValues } from "src/api/user";

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { isLoading, mutate } = useLogin();
  const onSubmit = ({ username, password }: LoginFormValues) => {
    mutate({ username, password });
  };

  return (
    <AppLayout title="로그인" src="/mypage">
      <Toast />
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          important
          info="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          style={{ marginBottom: "1rem" }}
          {...register("username", {
            required: "필수 응답 항목입니다.",
          })}
        />
        {errors.username?.message}
        <TextField
          important
          info="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "필수 응답 항목입니다.",
            minLength: {
              value: 3,
              message: "비밀번호는 8자 이상이여야 합니다,",
            },
          })}
        />
        {errors.password?.message}
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
