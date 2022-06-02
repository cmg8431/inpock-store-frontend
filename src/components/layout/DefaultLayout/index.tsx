import React from "react";
import * as S from "./styled";
import { Footer, Navbar } from "src/components/common";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <S.DefaultLayoutWrapper>
      <Navbar />
      <S.DefaultLayoutChildrenWrapper>{children}</S.DefaultLayoutChildrenWrapper>
      <Footer />
    </S.DefaultLayoutWrapper>
  );
};
