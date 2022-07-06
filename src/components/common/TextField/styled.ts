import styled from "styled-components";

export const InputElement = styled.input`
  background-color: white;
  border: 1px solid #cacaca;
  padding: 0.7rem 1rem;
  margin-top: 0rem;
  margin-bottom: 0.8rem;
  color: #343434;
  transition: border 100ms ease 0s;
  font-size: 0.95rem;
  outline: none;
  width: 100%;
  :focus {
    border: 1px solid #343434;
  }
  ::placeholder {
    color: #d8d8d8;
    font-weight: 300;
  }
`;
