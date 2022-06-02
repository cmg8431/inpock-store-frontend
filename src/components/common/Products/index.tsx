import React from "react";
import * as S from "./styled";

interface ProdutsProps {
  title: string;
  products: ProductProps[];
}

interface ProductProps {
  url: string;
  title: string;
  subTitle: string;
}

export const Products: React.FC<ProdutsProps> = ({ title, products }) => {
  return (
    <S.ProductsWrapper>
      <S.ProductsTitle>{title}</S.ProductsTitle>
      <S.ProductsContentWrapper>
        {products.map((product) => {
          return (
            <S.ProductsContentContainer>
              <S.ProductsContentImg src={product.url} alt={product.title} />
              <S.ProductsContentTitle>{product.title}</S.ProductsContentTitle>
              <S.ProductsContentSubTitle>{product.subTitle}</S.ProductsContentSubTitle>
            </S.ProductsContentContainer>
          );
        })}
      </S.ProductsContentWrapper>
    </S.ProductsWrapper>
  );
};
