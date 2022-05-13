import React, { FC } from "react";
import styled from "styled-components";
import { COLORS, ROUTERS } from "assets/constant";
import { PricingCard } from "../components";
import { getProducts } from "src/services/requests";
import { ProductType } from "src/types";
import { useAppDispatch, useAppSelector, RootState } from "src/store/store";
import { selectProduct } from "src/store/ducks/product";
import { useRouter } from "next/router";

interface HomeProps {
  products: ProductType[];
}

const Home: FC<HomeProps> = ({ products }) => {
  const userName = useAppSelector((state: RootState) => state.user.userName);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSelectedProduct = (index: number) => {
    dispatch(selectProduct(products[index]));

    if (userName) {
      router.push(ROUTERS.CHECKOUT);
    } else {
      router.push(ROUTERS.CREATE_ACCOUNT);
    }
  };

  return (
    <Root>
      <Title>Get started with Gscore today!</Title>

      <CardContainer>
        {products.map((product: ProductType, index) => (
          <PricingCard
            key={product.id}
            sitesCount={product.sitesCount}
            prices={product.prices}
            isSecondType={index === 1}
            onClick={() => handleSelectedProduct(index)}
          />
        ))}
      </CardContainer>

      <ContactUsContainer>
        <Text>Have more than 10 sites?</Text>
        <Link>Contact us</Link>
      </ContactUsContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 44px;
  margin-bottom: 48px;
  color: ${COLORS.Color_100};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-bottom: 33px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.div`
  font-size: 18px;
  color: ${COLORS.Color_100};
`;

const Link = styled.a`
  cursor: pointer;
  color: ${COLORS.Primary_1};
  font-size: 18px;
  border-bottom: 1px solid ${COLORS.Primary_1};

  &:hover {
    color: ${COLORS.Color_100};
    border-bottom: 1px solid ${COLORS.Color_100};
  }
`;

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}

export default Home;
