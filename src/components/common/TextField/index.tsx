/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
import React, { InputHTMLAttributes } from "react";
import * as S from "./styled";
import ImportantSVG from "src/assets/svg/Important.svg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  info: string;
  important: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ important = false, info, ...options }, ref) => {
    return (
      <>
        <S.Label>
          <span style={{ marginRight: "0.2rem" }}>{info}</span>
          {important ? <ImportantSVG /> : null}
        </S.Label>
        <S.TextField ref={ref} {...options} />
      </>
    );
  },
);
