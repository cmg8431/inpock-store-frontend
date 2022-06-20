import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "src/hook/useToast";
import * as S from "./styled";

export interface ToastProps {
  visible?: boolean;
  template?: React.ReactNode | string;
}

export const Toast: React.FC<ToastProps> = () => {
  const { toast, hideToast } = useToast();
  const { visible, template } = toast;
  // const location = useLocation();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     hideToast({ template: toast?.template });
  //   };
  //   // location.events.on("routeChangeStart", handleRouteChange);
  //   return () => {
  //     handleRouteChange();
  //     // location.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [hideToast, toast?.template]);

  return (
    <S.ToastContainer visible={visible || false}>
      <S.ToastWrapper>
        {typeof template === "string" && <div>{template}</div>}
        {typeof template !== "string" && template}
      </S.ToastWrapper>
    </S.ToastContainer>
  );
};
