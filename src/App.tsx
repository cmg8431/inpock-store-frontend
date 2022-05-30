import React from "react";
import { GlobalStyle } from "src/styles";
import { AppRouter } from "src/routes";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
