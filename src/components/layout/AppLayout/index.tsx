import React from "react";
import * as S from "./styled";
import ArrowRightSVG from "src/assets/svg/ArrowRight.svg";
import { Link } from "react-router-dom";
import { Toast } from "src/components";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  src: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, title, src }) => {
  const indentTitle = title.split("/");

  return (
    <S.AppLayoutWrapper>
      <Link to={src}>
        <ArrowRightSVG />
      </Link>
      <Toast />
      {indentTitle.length >= 1 ? (
        <div style={{ margin: "1.5rem 0" }}>
          {indentTitle.map((title) => {
            return <S.AppLayoutTitle style={{ margin: "0.5rem 0" }}>{title}</S.AppLayoutTitle>;
          })}
        </div>
      ) : (
        <S.AppLayoutTitle>{title}</S.AppLayoutTitle>
      )}
      <S.AppLayoutChildrenWrapper>{children}</S.AppLayoutChildrenWrapper>
    </S.AppLayoutWrapper>
  );
};
