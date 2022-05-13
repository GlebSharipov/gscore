import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import { TabCreateAccount } from "../../components";

const Authorization: NextPage = () => {
  const router = useRouter();
  const { tabId } = router.query;
  const tubIdNumber = Number(tabId);

  return (
    <Root>
      <TabCreateAccount tabId={tubIdNumber} />
    </Root>
  );
};

const Root = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export default Authorization;
