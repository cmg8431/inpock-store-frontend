import React from "react";
import { Footer, Navbar } from "src/components/common";
import * as S from "./styled";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <S.DefaultLayoutWrapper>
      <Navbar />
      <S.DefaultLayoutChildrenWrapper>{children}</S.DefaultLayoutChildrenWrapper>
      <Footer />
    </S.DefaultLayoutWrapper>
  );
};
