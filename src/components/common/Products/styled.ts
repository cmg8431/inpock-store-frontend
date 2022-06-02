import styled from "styled-components";

export const ProductsWrapper = styled.div`
  padding-left: 16px;
`;

export const ProductsContentWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

export const ProductsTitle = styled.h4`
  padding: 0.8rem 0rem 0rem;
  color: #343434;
`;

export const ProductsContentImg = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 13.5rem;
  margin-bottom: 1rem;
`;

export const ProductsContentTitle = styled.h4`
  margin: 0rem 0rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
`;

export const ProductsContentSubTitle = styled.p`
  margin: 0rem;
  font-size: 0.85rem;
`;
