/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import * as S from "./styled";
import { AppLayout, AuthLabelTextField, Button, TextField } from "src/components";
import { useForm } from "react-hook-form";
import { SmsFormValues, sms } from "src/api/user";
import { useSmsVerify } from "src/hook/query";
import ImportantSVG from "src/assets/svg/important.svg";
import useToast from "src/hook/useToast";

export const TelCheckPage: React.FC = () => {
  const { register, watch, handleSubmit } = useForm();
  const { mutate } = useSmsVerify();
  const { showToast } = useToast();
  const [onClickSms, setOnClickSms] = useState<boolean>(false);

  const verifcationCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sms(watch("phone_number"))
      .then((data) => showToast({ visible: true, template: data.message }))
      .catch((data) => showToast({ visible: true, template: data.response?.data.message }));
    setOnClickSms(true);
  };

  const onSubmit = ({ phone_number, auth_number }: SmsFormValues) => {
    mutate({ phone_number, auth_number });
  };

  return (
    <AppLayout title="휴대폰 번호 인증" src="/auth/register/agree">
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "0 0 3rem 0" }}>
        <div>
          <form onSubmit={verifcationCode}>
            <S.TelcheckTextFieldTextContainer>
              <span>휴대폰 입력</span> <ImportantSVG />
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
              <Button onClick={() => verifcationCode} variant="outlined">
                {onClickSms ? <span>재발송</span> : <span>인증받기</span>}
              </Button>
            </S.TelcheckTextFieldContainer>
          </form>
        </div>
        <AuthLabelTextField
          {...register("auth_number", {
            maxLength: 4,
          })}
          style={{ marginBottom: "3.5rem" }}
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
