import React from "react";
import { DefaultLayout, Products } from "src/components";
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
      <Products
        title="마켓 오픈했어요 ✨"
        products={[
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@320_1653749757-6ac314d5-7b62-432d-a996-b44be425b908.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/29/thumb@320_1653808333-d51938a6-3b25-43bc-88da-92f23205ef80.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
        ]}
      />
      <Products
        title="인기있는 상품 🔥"
        products={[
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/1/thumb@320_1654012647-e610461e-7b56-4d43-9da6-a306c97b4987.jpeg",
            title: "포멀 조거 pt",
            subTitle: "36,000원",
          },
        ]}
      />
    </DefaultLayout>
  );
};
