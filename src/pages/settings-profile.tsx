import type { NextPage } from "next";

import styled from "styled-components";
import { TabProfile } from "../components";
import { COLORS } from "src/constant";

const SettingsProfile: NextPage = () => {
  return (
    <Root>
      <Title>Settings</Title>
      <TabProfile />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 54px;
  color: ${COLORS.Color_100};
  margin-bottom: 48px;
  @media (max-width: 400px) {
    text-align: center;
    font-size: 30px;
  }
`;

export default SettingsProfile;
