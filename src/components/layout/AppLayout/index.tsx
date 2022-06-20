import React from "react";
import * as S from "./styled";
import ArrowRightSVG from "src/assets/svg/ArrowRight.svg";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  src: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, title, src }) => {
  return (
    <S.AppLayoutWrapper>
      <Link to={src}>
        <ArrowRightSVG />
      </Link>
      <S.AppLayoutTitle>{title}</S.AppLayoutTitle>
      <S.AppLayoutChildrenWrapper>{children}</S.AppLayoutChildrenWrapper>
    </S.AppLayoutWrapper>
  );
};
