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
  width: 50%;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  width: 195px;
  margin-left: 20px;
  color: ${COLORS.Color_100};
  background-color: ${COLORS.Color_800};
  border-bottom: 8px solid ${COLORS.Color_600};
  padding-bottom: 20px;

  &:focus {
    color: ${COLORS.Primari_1};
    border-color: ${COLORS.Primari_1};
  }
`;

const StyledTabList = styled(TabList)`
  padding: 4px;
  display: flex;
  margin: 0;
`;
