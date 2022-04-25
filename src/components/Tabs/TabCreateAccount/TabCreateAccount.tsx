import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";

export const TabCreateAccount: FC = () => {
  return (
    <StyledTabs>
      <StyledTabList>
        <StyledTab>Create account</StyledTab>
        <StyledTab>Log in</StyledTab>
        <StyledTab>Checkout</StyledTab>
      </StyledTabList>

      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  font-size: 20px;
  max-width: 620px;
  width: 100%;
  @media (max-width: 375px) {
    width: 100%;
    font-size: 14px;
  }
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  max-width: 195px;
  width: 100%;
  margin-right: 20px;
  white-space: nowrap;
  color: ${COLORS.Color_100};
  background-color: ${COLORS.Color_800};
  border-bottom: 8px solid ${COLORS.Color_600};
  padding-bottom: 20px;

  &:focus {
    color: ${COLORS.Primari_1};
    border-color: ${COLORS.Primari_1};
  }

  @media (max-width: 375px) {
    border-bottom: 2px solid ${COLORS.Color_600};
    padding-bottom: 5px;
  }
`;

const StyledTabList = styled(TabList)`
  padding: 4px;
  display: flex;
  margin: 0;
`;
