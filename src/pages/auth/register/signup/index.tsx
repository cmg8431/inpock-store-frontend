/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { AppLayout, Button, TextField } from "src/components";
import { useForm } from "react-hook-form";
import { range } from "src/utils/range";

export const SignUpPage: React.FC = () => {
  const { register, watch } = useForm();

  return (
    <AppLayout title="회원가입" src="/auth/register/telcheck">
      <TextField
        info="아이디"
        placeholder="영문, 소문자, 숫자, 특수문자 가능 / 4~20자"
        {...register("id", {
          required: "필수 응답 항목입니다.",
        })}
        important
      />
      <TextField
        info="비밀번호"
        placeholder="영문, 소문자, 숫자 조합 / 8~20자"
        {...register("password", {
          required: "필수 응답 항목입니다.",
        })}
        important
      />
      <TextField
        info="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        {...register("passwordConfig", {
          required: "필수 응답 항목입니다.",
        })}
        important
      />
      <TextField
        info="이름"
        placeholder="이름을 입력해주세요"
        {...register("name", {
          required: "필수 응답 항목입니다.",
        })}
        important
      />
      <label>생년월일</label>
      <div>
        <select
          {...register("year", {
            required: "필수 응답 항목입니다.",
          })}
        >
          <option>년도</option>
          {range(new Date().getFullYear(), new Date().getFullYear() - 30, -1).map((date) => {
            return <option>{date}</option>;
          })}
        </select>
        <select
          {...register("month", {
            required: "필수 응답 항목입니다.",
          })}
        >
          <option>월</option>
          {range(1, 12, 1).map((date) => {
            return <option>{date}</option>;
          })}
        </select>
        <select
          {...register("day", {
            required: "필수 응답 항목입니다.",
          })}
        >
          <option>월</option>
          {range(1, new Date(parseInt(watch("year"), 10), parseInt(watch("month"), 10), 0).getDate(), 1).map((date) => {
            return <option>{date}</option>;
          })}
        </select>
      </div>
      <Button
        disabled={!watch("id") || !watch("password") || !watch("passwordConfig") || !watch("name")}
        variant="contained"
      >
        완료
      </Button>
    </AppLayout>
  );
};
