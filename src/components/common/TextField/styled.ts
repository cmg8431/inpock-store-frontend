import styled from "styled-components";
import { Input } from "../Input";

export const TextField = styled(Input)`
  background-color: white;
  border: 1px solid #cacaca;
  padding: 0.7rem 1rem;
  margin-top: 0rem;
  margin-bottom: 0.8rem;
  color: #343434;
  transition: border 100ms ease 0s;
  font-size: 0.95rem;
  :focus {
    border: 1px solid #343434;
  }
  ::placeholder {
    color: #d8d8d8;
    font-weight: 300;
  }
`;

export const Label = styled.label`
  font-size: 0.88rem;
  font-weight: 400;
  color: #343434;
  margin: 1.2rem 0rem 1rem 0rem;
  display: flex;
  align-items: center;
`;
