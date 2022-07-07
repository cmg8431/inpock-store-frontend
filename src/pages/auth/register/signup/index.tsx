/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
import React from "react";
import * as S from "./styled";
import { AppLayout, AuthLabelTextField, Button } from "src/components";
import { useForm } from "react-hook-form";
import { range } from "src/utils/range";
import { useRegister } from "src/hook/query";
import { useRecoilValue } from "recoil";
import { globalUserPrivacyInfo } from "src/store";
import { RegisterStep3Values } from "src/api/user";
import useToast from "src/hook/useToast";

export const SignUpPage: React.FC = () => {
  const { register, watch, handleSubmit } = useForm();
  const { mutate } = useRegister();
  const { showToast } = useToast();
  const { phone_number, tos_agree } = useRecoilValue(globalUserPrivacyInfo);

  const onSubmit = ({ username, password, name, passwordConfig }: RegisterStep3Values) => {
    if (password !== passwordConfig) return showToast({ visible: true, template: "비밀번호를 다시 확인해주세요." });
    mutate({
      username,
      password,
      phone_number,
      name,
      birth_date: watch("year") + "-" + watch("month") + "-" + watch("day"),
      tos_agree,
    });
  };

  return (
    <AppLayout title="회원가입" src="/auth/register/telcheck">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthLabelTextField
          className="아이디"
          placeholder="영문, 소문자, 숫자, 특수문자 가능 / 4~20자"
          {...register("username", {
            required: "필수 응답 항목입니다.",
          })}
          importance
        />
        <AuthLabelTextField
          type="password"
          className="비밀번호"
          placeholder="영문, 소문자, 숫자 조합 / 8~20자"
          {...register("password", {
            required: "필수 응답 항목입니다.",
          })}
          importance
        />
        <AuthLabelTextField
          type="password"
          className="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("passwordConfig", {
            required: {
              value: true,
              message: "비밀번호를 확인 해주세요.",
            },
          })}
          importance
        />
        <AuthLabelTextField
          className="이름"
          placeholder="이름을 입력해주세요"
          {...register("name", {
            required: "필수 응답 항목입니다.",
          })}
          importance
        />
        <S.SignUpPageTodaySelectLabel>생년월일</S.SignUpPageTodaySelectLabel>
        <S.SignUpageTodaySelectContainer>
          <S.SignUpPageTodaySelect
            {...register("year", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>년도</option>
            {range(new Date().getFullYear(), new Date().getFullYear() - 30, -1).map((date) => {
              return <option>{date}</option>;
            })}
          </S.SignUpPageTodaySelect>
          <S.SignUpPageTodaySelect
            {...register("month", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>월</option>
            {range(1, 12, 1).map((date) => {
              return <option>{("00" + date).slice(-2)}</option>;
            })}
          </S.SignUpPageTodaySelect>
          <S.SignUpPageTodaySelect
            {...register("day", {
              required: "필수 응답 항목입니다.",
            })}
          >
            <option>일</option>
            {range(1, new Date(parseInt(watch("year"), 10), parseInt(watch("month"), 10), 0).getDate(), 1).map(
              (date) => {
                return <option>{("00" + date).slice(-2)}</option>;
              },
            )}
          </S.SignUpPageTodaySelect>
        </S.SignUpageTodaySelectContainer>
        <Button
          disabled={!watch("username") || !watch("password") || !watch("passwordConfig") || !watch("name")}
          variant="contained"
        >
          완료
        </Button>
      </form>
    </AppLayout>
  );
};
