import type { NextPage } from "next";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import { TabCreateAccount } from "../../components";
import { getProducts } from "src/services/requests";
import { ProductType } from "src/types";
import { useAppSelector, RootState } from "src/store/store";

interface AuthorizationProps {
  products: ProductType[];
}

const Authorization: FC<AuthorizationProps> = ({ products }) => {
  const userName = useAppSelector((state: RootState) => state.user.userName);
  const router = useRouter();
  const { tabId } = router.query;
  const tubIdNumber = Number(tabId);

  return (
    <Root>
      <TabCreateAccount
        isDisabled={userName.length === 0}
        tabId={tubIdNumber}
      />
    </Root>
  );
};

const Root = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}

export default Authorization;
