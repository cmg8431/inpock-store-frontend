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
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2021/12/15/thumb@1080_1639553681-5dde1790-4fc2-479b-a176-16ead24bb317.jpeg",
            title: "오딜라",
            subTitle: "5월마켓❤️",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/2/18/thumb@1080_1645151852-715bb006-3586-43b7-9b48-f95d8d86984d.jpeg",
            title: "Hada",
            subTitle: "HADA&RUDA",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2019/10/1/thumb@1080_2019-10-01-383927.jpeg",
            title: "룩아웃사이드",
            subTitle: "Lookoutside",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/2/thumb@1080_1654136760-e787b6e2-87b0-4b40-bcd6-40a3b3a2404a.jpeg",
            title: "러브미",
            subTitle: "💛[6월]스터디신청💛",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/5/28/thumb@1080_1653665503-225ebd16-90a1-42d5-9a0b-7907e00fdcda.jpeg",
            title: "디꼬망",
            subTitle: "summer",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/6/2/thumb@1080_1654138863-20a6dd24-5556-405a-8aa4-4d0103f37159.jpeg",
            title: "bl_shop__",
            subTitle: "2022.6 / 결제창으로만사용합니다 / 문의사항은디엠주세요 @bl_shop",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2021/3/12/thumb@1080_1615522335-f02ee83c-e9a0-4928-9ddc-285d49d0dcf4.jpeg",
            title: "에잇어스",
            subTitle: "매주 화/금 낮 1시 업데이트 💓신상 48시간동안 7% 할인",
          },
          {
            url: "https://d32rratnkhh4zp.cloudfront.net/media/images/2022/4/27/thumb@1080_1651044505-3d6e176f-1ea0-4b32-af75-7cf9bff5f16b.jpeg",
            title: "de:ck",
            subTitle: "de:ck",
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
