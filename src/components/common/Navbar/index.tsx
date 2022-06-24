import React from "react";
import * as S from "./styled";
import LogoPNG from "src/assets/png/Logo.png";
import UserSVG from "src/assets/svg/User.svg";
import ShoppingBagSVG from "src/assets/svg/ShoppingBag.svg";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <S.NavbarWrapper>
      <Link to="/">
        <S.NavbarImg src={LogoPNG} alt="INPOCK" />
      </Link>
      <div>
        <Link to="/mypage">
          <UserSVG />
        </Link>
        <ShoppingBagSVG style={{ marginLeft: "1rem" }} />
      </div>
    </S.NavbarWrapper>
  );
};
