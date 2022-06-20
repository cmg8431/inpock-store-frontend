import styled, { css } from "styled-components";

export const ToastContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 53%;
  left: 0%;
  width: 100%;
  z-index: 100003;
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  transition: all 0.6s;
  opacity: 0;
  pointer-events: none;
  color: white;
  font-size: 0.8rem;
  ${({ visible }) => {
    if (visible)
      return css`
        opacity: 0.8;
      `;
    return 0;
  }}
`;

export const ToastWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: black;
  padding: 1rem;
  margin: 0 auto;
`;
