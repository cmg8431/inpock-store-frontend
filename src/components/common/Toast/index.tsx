import React from "react";
import useToast from "src/hook/useToast";
import * as S from "./styled";

export interface ToastProps {
  visible?: boolean;
  template?: React.ReactNode | string;
}

export const Toast: React.FC<ToastProps> = () => {
  const { toast, hideToast } = useToast();
  const { visible, template } = toast;

  return (
    <S.ToastContainer visible={visible || false}>
      <S.ToastWrapper>
        {typeof template === "string" && <div>{template}</div>}
        {typeof template !== "string" && template}
      </S.ToastWrapper>
    </S.ToastContainer>
  );
};
