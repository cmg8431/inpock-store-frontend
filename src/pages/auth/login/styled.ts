import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginSubTitle = styled.p`
  margin: 0rem;
  letter-spacing: -0.01rem;
  font-size: 0.9rem;
`;

export const LoginGoToLink = styled(Link)`
  margin-left: 0.2rem;
  color: #343434;
  font-size: 0.85rem;
  text-underline-position: under;
`;

export const LoginAuthFindWrapper = styled.p`
  display: flex;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: -0.03rem;
  justify-content: flex-end;
  margin: 0rem 0rem 1rem;
`;

export const LoginOrderInquiry = styled.p`
  display: flex;
  justify-content: center;
`;
