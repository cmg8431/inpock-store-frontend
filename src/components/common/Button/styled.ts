/* eslint-disable import/no-cycle */
import styled, { css } from "styled-components";
import { ButtonVariantType } from ".";

export const ButtonElement = styled.button<{
  variant: ButtonVariantType;
}>`
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: 400;
  padding: 1rem;
  transition: all 0.1s;
  margin-top: 1.5rem;
  ${(props) => {
    switch (props.variant) {
      case "contained":
        return css`
          background-color: #343434;
          color: white;
          :disabled {
            background-color: rgb(216, 216, 216);
            cursor: not-allowed;
            &:active {
              background-color: rgb(216, 216, 216);
            }
          }
          &:active {
            background-color: black;
          }
        `;
      case "outlined":
        return css`
          line-height: 1;
          margin: 0px;
          cursor: pointer;
          user-select: none;
          font-size: 0.9rem;
          padding: calc(0.625rem - 1px) calc(0.75rem - 1px);
          background-color: rgb(255, 255, 255);
          border: 1px solid rgb(52, 52, 52);
        `;
      case "outlinedOrange":
        return css`
          background-color: white;
          border: 1px solid rgb(249, 74, 20);
          color: rgb(249, 74, 20);
          &:active {
            background-color: #faf3f0;
          }
        `;
      case "containedOrange":
        return css`
          background-color: #ff713a;
          color: white;
          font-weight: 600;
          padding: 1.2rem 1rem;
          &:active {
            background-color: #ef632b;
          }
        `;
      case "containedGray":
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
      default:
        return css``;
    }
  }}
`;
