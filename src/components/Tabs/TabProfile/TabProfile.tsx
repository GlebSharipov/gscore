import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { COLORS } from "src/constant";
import styled from "styled-components";
import { UpdateUserForm, UpdatePasswordForm } from "src/components/Forms";

export const TabProfile: FC = () => {
  return (
    <StyledTabs defaultFocus>
      <StyledTabList>
        <StyledTab>Personal info</StyledTab>
        <StyledTab>Change password</StyledTab>
        <LineContinuation />
      </StyledTabList>

      <StyledTabPanel>
        <Label>Personal Info</Label>
        <UpdateUserForm />
      </StyledTabPanel>

      <StyledTabPanel>
        <Label>Change password</Label>
        <UpdatePasswordForm />
      </StyledTabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 410px) {
    width: 100%;
    font-size: 14px;
  }
`;

const StyledTab = styled(Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 195px;
  padding: 0 10px;
  white-space: nowrap;
  color: ${COLORS.Color_100};
  background-color: ${COLORS.Color_800};
  border-bottom: 2px solid ${COLORS.Color_700};
  padding-bottom: 20px;

  &:focus {
    color: ${COLORS.Primary_1};
    border-color: ${COLORS.Primary_1};
  }

  @media (max-width: 410px) {
    padding-bottom: 5px;
  }
`;

const StyledTabList = styled(TabList)`
  width: 100%;
  padding: 4px;
  display: flex;
  margin-bottom: 48px;
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;

const LineContinuation = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 45px;
  background-color: ${COLORS.Color_700};
  @media (max-width: 410px) {
    display: none;
  }
`;

const Label = styled.h2`
  font-size: 28px;
  color: ${COLORS.Color_100};
  margin-bottom: 24px;
`;
