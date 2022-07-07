import React from "react";
import * as S from "./styled";
import { AppLayout, Button } from "src/components";
import SuccessBannerPNG from "src/assets/png/SuccessBanner.png";
import { useNavigate } from "react-router-dom";

export const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppLayout title="" src="/">
      <S.SuccessPageContainer>
        <img src={SuccessBannerPNG} alt="배너 이미지" />
        <h2>회원가입이 완료되셨습니다.</h2>
        <p>
          쉽고 빠르게 인플루언서가
          <br /> 검증한 상품을 구매해보세요!
        </p>
      </S.SuccessPageContainer>
      <Button onClick={() => navigate("/")} variant="contained">
        쇼핑하러 가기
      </Button>
    </AppLayout>
  );
};
