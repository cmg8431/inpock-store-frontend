/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import * as S from "./styled";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const htmlProps = rest as any;
  return <S.Button {...htmlProps}>{children}</S.Button>;
};
