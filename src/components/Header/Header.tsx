import React, { FC } from "react";
import { Accordion } from "../Accordion";
import { COLORS } from "../../assets/constant/colors";
import styled from "styled-components";
import { LogoIcon } from "../icons";
import { Button } from "../UI";
import { ChevronDownIcon } from "../icons";

interface HeaderProps {
  isUser?: boolean;
}

export const Header: FC<HeaderProps> = ({ isUser = true }) => {
  return (
    <Root>
      <Container>
        <LogoIcon />
        <Title>GSCORE</Title>
      </Container>

      {isUser && (
        <Container>
          <UserName>Alex</UserName>
          <Accordion
            trigger={
              <ButtonChevronDown>
                <ChevronDownIcon />
              </ButtonChevronDown>
            }
          />
          <StyledButton primary text="Get Jscore" />
        </Container>
      )}
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  height: 122px;
  background-color: ${COLORS.Color_800};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.h2`
  position: absolute;
  right: 160px;
  font-size: 20px;
  color: ${COLORS.Color_100};
`;

const Title = styled.h1`
  font-size: 22px;
  margin-left: 10px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const StyledButton = styled(Button)`
  max-width: 136px;
  margin-left: 15px;
`;

const ButtonChevronDown = styled.button`
  cursor: pointer;
  margin-left: 170px;
`;
