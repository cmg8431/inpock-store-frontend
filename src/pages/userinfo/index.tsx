import React, { useCallback } from "react";
import { AppLayout, Button } from "src/components";
import { useLogout } from "src/hook/query";
import * as S from "./styled";

export const UserInfoPage: React.FC = () => {
  const { mutate: logout, isLoading } = useLogout();

  const handleLogoutButtonClick = useCallback(() => logout(), [logout]);

  return (
    <AppLayout title="개인정보 관리" src="/mypage">
      <S.testStyle>
        <Button onClick={handleLogoutButtonClick} variant="containedGray">
          로그아웃
        </Button>
      </S.testStyle>
    </AppLayout>
  );
};
