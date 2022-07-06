/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-cycle */
import React from "react";
import * as S from "./styled";

export type ButtonVariantType = "contained" | "outlined" | "containedOrange" | "outlinedOrange" | "containedGray";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariantType;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => <S.ButtonElement {...props} />;
