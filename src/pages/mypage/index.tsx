/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { AppLayout, CommonButton } from "src/components";
import { useFetchUser } from "src/hook/query";
import ChevronRightSVG from "src/assets/svg/ChevronRight.svg";

export const MyPage: React.FC = () => {
  const { data: user, isFetching } = useFetchUser();

  const MyPageLinkListItem = [
    {
      title: "쇼핑",
      item: [
        { title: "포인트 조회", link: "/", isUser: user },
        { title: "주문 / 배송조회", link: "/", isUser: true },
        { title: "배송지 관리", link: "/", isUser: user },
      ],
    },
    { title: "문의", item: [{ title: "나의 문의 내역", link: "/", isUser: true }] },
    { title: "안내", item: [{ title: "자주묻는 질문", link: "/", isUser: true }] },
  ];

  return (
    <AppLayout title="마이페이지" src="/">
      {isFetching ? null : user ? (
        <Link style={{ textDecoration: "none" }} to="/mypage/userinfo">
          <CommonButton styleType="grayBackground">
            <span>{user.result.username}</span>
            <ChevronRightSVG />
          </CommonButton>
        </Link>
      ) : (
        <>
          <S.MyPageSubTitle>
            회원가입하고
            <br />
            셀러 별 포인트를 사용해보세요!
          </S.MyPageSubTitle>
          <Link to="/auth/login">
            <CommonButton styleType="orangeBackground">로그인/회원가입</CommonButton>
          </Link>
        </>
      )}
      <S.MyPageHr />
      <div style={{ paddingBottom: "3.5rem" }}>
        {MyPageLinkListItem.map((link) => {
          return (
            <S.MyPageLinkListWrapper>
              <S.MyPageLinkListTitle>{link?.title}</S.MyPageLinkListTitle>
              {link.item.map((v) => {
                return v.isUser ? (
                  <Link style={{ textDecoration: "none" }} to={v.link}>
                    <CommonButton styleType="grayBackground">
                      <span>{v?.title}</span>
                      <ChevronRightSVG />
                    </CommonButton>
                  </Link>
                ) : null;
              })}
            </S.MyPageLinkListWrapper>
          );
        })}
      </div>
      <S.MyPageTermsWrapper>
        <S.MyPageLinkToTerms href="https://terms.inpock.co.kr/store/privacy">개인정보 처리방침</S.MyPageLinkToTerms>
        <S.MyPageLinkToTerms href="https://terms.inpock.co.kr/store/terms">이용약관</S.MyPageLinkToTerms>
      </S.MyPageTermsWrapper>
    </AppLayout>
  );
};
