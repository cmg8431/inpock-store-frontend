import styled from "styled-components";

export const ProductsWrapper = styled.div`
  padding-left: 16px;
  margin-bottom: 1rem;
`;

export const ProductsContentWrapper = styled.span`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  @media (min-width: 736px) {
    flex-wrap: wrap;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  scroll-snap-align: start;
  flex-shrink: 0;
  position: relative;
  width: calc(50% - 8px);
  p,
  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media (min-width: 721px) {
    width: calc(22.72%);
  }
`;

export const ProductsTitle = styled.h4`
  padding: 0.8rem 0rem 0rem;
  color: #343434;
`;

export const ProductsContentImgWrapper = styled.span`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 130%;
`;

export const ProductsContentImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  filter: none;
  object-fit: cover;
`;

export const ProductsContentTitle = styled.h4`
  margin: 1rem 0rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ProductsContentSubTitle = styled.p`
  margin: 0rem;
  font-size: 0.875rem;
`;
