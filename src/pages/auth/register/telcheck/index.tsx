/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import * as S from "./styled";
import { AppLayout, AuthLabelTextField, Button, TextField } from "src/components";
import { useForm } from "react-hook-form";
import { SmsFormValues, smsText } from "src/api/user";
import { useSmsVerify } from "src/hook/query";
import ImportantSVG from "src/assets/svg/important.svg";

export const TelCheckPage: React.FC = () => {
  const { register, watch, handleSubmit } = useForm();
  const { mutate } = useSmsVerify();

  const dlswmd = () => {
    smsText(watch("phone_number"));
  };

  const onSubmit = ({ phone_number, auth_number }: SmsFormValues) => {
    mutate({ phone_number, auth_number });
  };

  return (
    <AppLayout title="휴대폰 번호 인증" src="/auth/register/agree">
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "0 0 3rem 0" }}>
        <div>
          <S.TelcheckTextFieldTextContainer>
            <span>휴대폰 번호 입력</span> <ImportantSVG />
          </S.TelcheckTextFieldTextContainer>
          <S.TelcheckTextFieldContainer>
            <TextField
              style={{ marginBottom: "1rem" }}
              {...register("phone_number", {
                maxLength: 11,
              })}
              className="휴대폰 번호"
              placeholder="휴대폰 번호 입력"
              maxLength={11}
            />
            <Button onClick={() => dlswmd()} variant="outlined">
              인증받기
            </Button>
          </S.TelcheckTextFieldContainer>
        </div>
        <AuthLabelTextField
          {...register("auth_number", {
            maxLength: 4,
          })}
          pattern="[0-9]*"
          maxLength={4}
          placeholder="인증번호 입력"
        />
        <Button disabled={!watch("phone_number") || !watch("auth_number")} variant="contained">
          인증완료
        </Button>
      </form>
    </AppLayout>
  );
};
