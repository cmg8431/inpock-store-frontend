import React from "react";
import { AppLayout } from "src/components";
// import * as S from "./styled";

export const UserInfoPage: React.FC = () => {
  return (
    <AppLayout title="개인정보 관리" src="/mypage">
      개인정보관리
    </AppLayout>
  );
};
