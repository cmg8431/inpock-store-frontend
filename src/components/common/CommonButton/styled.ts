/* eslint-disable consistent-return */
import styled, { css } from "styled-components";
import { Button } from "../Button";

export const CommonButton = styled(Button)<{ styleType: string }>`
  font-weight: 400;
  padding: 1rem;
  transition: all 0.1s;
  margin-top: 1.5rem;
  ${({ styleType }) => {
    if (styleType === "default") {
      return css`
        background-color: #343434;
        color: white;
        &:active {
          background-color: black;
        }
      `;
    }
    if (styleType === "orangeBorder") {
      return css`
        background-color: white;
        border: 1px solid rgb(249, 74, 20);
        color: rgb(249, 74, 20);
        &:active {
          background-color: #faf3f0;
        }
      `;
    }
    if (styleType === "orangeBackground") {
      return css`
        background-color: #ff713a;
        color: white;
        font-weight: 600;
        padding: 1.2rem 1rem;
        &:active {
          background-color: #ef632b;
        }
      `;
    }

    if (styleType === "grayBackground") {
      return css`
        transition: all 0s;
        background-color: rgb(246, 246, 246);
        color: #212529;
        font-weight: 400;
        font-size: 1rem;
        padding: 1.3rem 1rem;
        text-align: inherit;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        &:hover {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;
