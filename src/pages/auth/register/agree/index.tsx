import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout, CommonButton } from "src/components";

export const AgreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="인포크 회원가입/서비스 이용약관 동의" src="/auth/login">
      <CommonButton styleType="default" onClick={() => navigate("/auth/register/telcheck")}>
        다음으로
      </CommonButton>
    </AppLayout>
  );
};
