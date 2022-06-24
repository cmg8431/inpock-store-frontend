/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes } from "react";
import * as S from "./styled";
import ImportantSVG from "src/assets/svg/Important.svg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  info?: string;
  important?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ important = false, info, ...options }, ref) => {
    return (
      <>
        {info && (
          <S.Label>
            <span style={{ marginRight: "0.2rem" }}>{info}</span>
            {important && <ImportantSVG />}
          </S.Label>
        )}
        <S.TextField ref={ref} {...options} />
      </>
    );
  },
);
