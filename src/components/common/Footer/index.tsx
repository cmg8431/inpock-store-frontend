import React from "react";
import * as S from "./styled";
import TeamLogoSVG from "src/assets/svg/TeamLogo.svg";

export const Footer: React.FC = () => {
  return (
    <>
      <S.FooterInnerBox>
        <TeamLogoSVG />
        <br />{" "}
        <a href="https://terms.inpock.co.kr/store/terms" target="_blank" rel="noreferrer">
          이용약관
        </a>
        <a href="https://terms.inpock.co.kr/store/privacy" target="_blank" rel="noreferrer">
          개인정보처리방침
        </a>
        <a
          href="https://www.notion.so/inpock/INPOCK-TEAM-8ecc728639d94704b7b25ef8e770b117/"
          target="_blank"
          rel="noreferrer"
        >
          ABZ팀
        </a>
        <a href="https://pf.kakao.com/_VPVxhj/chat" target="_blank" rel="noreferrer">
          입점문의
        </a>
        <a href="https://seller.inpock.co.kr/" target="_blank" rel="noreferrer">
          판매자센터
        </a>
      </S.FooterInnerBox>
      <S.FooterInnerBox>에이비제트(주)</S.FooterInnerBox>
      <S.FooterInnerBox>
        에이비제트(주)는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은
        판매자에게 있습니다. <br />
        <br />
        @인포크스토어 상담하기
        <br />
        <br /> <strong>고객문의</strong> support@inpock.com
        <br />
        <br /> <strong>운영시간</strong> 10:00 ~ 18:00 주말/공휴일 제외
      </S.FooterInnerBox>
      <S.FooterInnerBox style={{ textAlign: "center" }}>ⓒ ABZ.INC 2022</S.FooterInnerBox>
    </>
  );
};
