/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { InputHTMLAttributes } from "react";
import * as S from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...options }, ref) => {
  return <S.InputElement ref={ref} {...options} />;
});
