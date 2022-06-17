/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import * as S from "./styled";

interface CommonButtonProps extends React.HTMLProps<HTMLButtonElement> {
  styleType: string;
  children: React.ReactNode;
}

export const CommonButton: React.FC<CommonButtonProps> = ({ children, styleType = "default", ...rest }) => {
  const htmlProps = rest as any;
  return (
    <S.CommonButton styleType={styleType} {...htmlProps}>
      {children}
    </S.CommonButton>
  );
};
