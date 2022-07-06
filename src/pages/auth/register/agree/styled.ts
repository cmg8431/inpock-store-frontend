import styled, { css } from "styled-components";
import CircleCheckSVG from "src/assets/svg/CircleCheck.svg";

export const CircleCheck = styled(CircleCheckSVG)<{ checked: boolean }>`
  cursor: pointer;
  ${({ checked }) =>
    checked &&
    css`
      path {
        fill: #ff723a;
      }
    `}
`;

export const NoneCheckBox = styled.input`
  display: none;
`;

export const AgreeCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

export const AgreeCheckBoxContainer = styled.div`
  padding: 0px 0px 0px 1rem;
`;

export const AgreeCheckBoxTitle = styled.span`
  margin-left: 0.8rem;
  font-size: 0.875rem;
  line-height: 1.57143;
  color: rgb(52, 52, 52);
`;

export const AgreeImportantMark = styled.mark`
  background: none;
  color: #ff723a;
`;
