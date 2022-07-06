import styled from "styled-components";

export const TelcheckTextFieldContainer = styled.div`
  display: flex;

  & > input {
    margin-right: 0.5rem;
  }

  & > button {
    height: 2.62rem;
    flex-shrink: 0;
    width: fit-content;
  }
`;

export const TelcheckTextFieldTextContainer = styled.label`
  font-size: 0.88rem;
  font-weight: 400;
  color: #343434;
  margin: 1.2rem 0rem 1rem 0rem;
  display: flex;
  align-items: center;

  & > span {
    margin-right: 0.5rem;
  }
`;
