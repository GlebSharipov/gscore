import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";

export const TabProfile: FC = () => {
  return (
    <StyledTabs>
      <StyledTabList>
        <StyledTab>Profile</StyledTab>
        <StyledTab>Subscriptions</StyledTab>
        <StyledTab>Change password</StyledTab>
        <LineContinuation />
      </StyledTabList>

      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  display: flex;
  font-size: 20px;
  width: 80%;
`;

const StyledTab = styled(Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 195px;
  color: ${COLORS.Color_100};
  background-color: ${COLORS.Color_800};
  border-bottom: 2px solid ${COLORS.Color_700};
  padding-bottom: 20px;

  &:focus {
    color: ${COLORS.Primari_1};
    border-color: ${COLORS.Primari_1};
  }
`;

const StyledTabList = styled(TabList)`
  width: 100%;
  padding: 4px;
  display: flex;
`;

const LineContinuation = styled.div`
  width: 50%;
  height: 2px;
  margin-top: 45px;
  background-color: ${COLORS.Color_700};
`;
