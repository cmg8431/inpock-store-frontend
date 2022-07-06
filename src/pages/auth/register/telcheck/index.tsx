/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { AppLayout, Button, TextField } from "src/components";
import { useForm } from "react-hook-form";

export const TelCheckPage: React.FC = () => {
  const { register, watch } = useForm();

  return (
    <AppLayout title="휴대폰 번호 인증" src="/auth/register/agree">
      <form style={{ margin: "0 0 3rem 0" }}>
        <TextField
          style={{ marginBottom: "1rem" }}
          {...register("phone", {
            required: "필수 응답 항목입니다.",
            maxLength: 11,
          })}
          info="휴대폰 번호"
          placeholder="휴대폰 번호 입력"
          maxLength={11}
          important
        />
        <TextField
          {...register("certification", {
            maxLength: 4,
          })}
          pattern="[0-9]*"
          maxLength={4}
          placeholder="인증번호 입력"
        />
      </form>
      <Button disabled={!watch("phone") || !watch("certification")} variant="contained">
        인증완료
      </Button>
    </AppLayout>
  );
};
