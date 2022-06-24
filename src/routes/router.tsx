import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, MainPage, UserInfoPage, MyPage, TelCheckPage, SignUpPage, AgreePage } from "src/pages";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="mypage/userinfo" element={<UserInfoPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register">
            <Route path="agree" element={<AgreePage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="telcheck" element={<TelCheckPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
