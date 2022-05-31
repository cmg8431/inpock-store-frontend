import React from "react";
import { DefaultLayout } from "src/components";
import * as S from "./styled";
import InpockThumbnailPNG from "src/assets/png/InpockThumbnail.png";

export const MainPage: React.FC = () => {
  return (
    <DefaultLayout>
      <S.MainPageBannerWrapper>
        <S.MainPageBannerContainer>
          <S.MainPageBannerTitle>
            아직도 일일이
            <br /> 주문받는 당신에게
          </S.MainPageBannerTitle>
          <S.MainPageBannerSubTitle>
            판매, 주문관리, 송장, 현금영수증, 고객관리
            <br /> 모든 기능이 100% 무료
          </S.MainPageBannerSubTitle>
        </S.MainPageBannerContainer>
        <S.MainPageBannerImg src={InpockThumbnailPNG} alt="INPOCKBANNERIMG" />
      </S.MainPageBannerWrapper>
    </DefaultLayout>
  );
};
