import React from "react";
import * as S from "./styled";
import LogoPNG from "src/assets/png/Logo.png";
import UserSVG from "src/assets/svg/User.svg";
import ShoppingBagSVG from "src/assets/svg/ShoppingBag.svg";

export const Navbar: React.FC = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarImg src={LogoPNG} alt="INPOCK" />
      <div>
        <UserSVG />
        <ShoppingBagSVG style={{ marginLeft: "1rem" }} />
      </div>
    </S.NavbarWrapper>
  );
};
