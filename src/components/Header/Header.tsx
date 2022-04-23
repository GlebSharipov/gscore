import React, { FC } from "react";
import { Accordion } from "../Accordion";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { LogoIcon } from "icons";
import { ChevronDownIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";
import { BurgerMenu } from "../BurgerMenu";

interface HeaderProps {
  userName: string;
}

export const Header: FC<HeaderProps> = ({ userName }) => {
  return (
    <Root>
      <ContainerLogo>
        <LogoIcon />
        <Title>GSCORE</Title>
      </ContainerLogo>

      <BurgerMenu userName={userName} />

      <Container>
        <Subscriptions>My subscriptions</Subscriptions>

        <Accordion
          trigger={
            <>
              <UserName>{userName}</UserName>
              <ButtonChevronDown>
                <ChevronDownIcon />
              </ButtonChevronDown>
            </>
          }
        />
      </Container>
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 122px;
  background-color: ${COLORS.Color_800};
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    display: none;
  }
`;

const UserName = styled.h2`
  position: absolute;
  cursor: pointer;
  right: 40px;
  top: 45px;
  font-size: 20px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;

const Title = styled.h1`
  font-size: 22px;
  margin-left: 10px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const ButtonChevronDown = styled.button`
  position: absolute;
  right: 0;
  top: 50px;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_700};
  }
`;

const Subscriptions = styled.a`
  cursor: pointer;
  font-size: 20px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
