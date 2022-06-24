import React from "react";
import { AppLayout, CommonButton, TextField } from "src/components";

export const TelCheckPage: React.FC = () => {
  return (
    <AppLayout title="휴대폰 번호 인증" src="/auth/register/agree">
      <form style={{ margin: "0 0 3rem 0" }}>
        <TextField style={{ marginBottom: "1rem" }} info="휴대폰 번호" placeholder="휴대폰 번호 입력" important />
        {/* <CommonButton styleType="defaultBorder">인증받기</CommonButton> */}
        <TextField placeholder="인증번호 입력" />
      </form>
      <CommonButton styleType="default">인증완료</CommonButton>
    </AppLayout>
  );
};
