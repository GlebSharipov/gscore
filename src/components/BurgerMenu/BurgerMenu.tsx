import React, { FC, useState } from "react";
import Link from "next/link";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { BurgerIcon, ChevronDownIcon, CloseIcon, LogoIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";
import { Accordion } from "../Accordion";

interface BurgerMenuProps {
  isVisible?: boolean;
  userName?: string;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ isVisible, userName }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleVisibleMenu = () => {
    setVisibleMenu((prevState) => !prevState);
  };

  return (
    <Root>
      {visibleMenu ? (
        <>
          <Overlay onClick={handleVisibleMenu} />

          <Menu>
            <LogogContainer>
              <Button onClick={handleVisibleMenu}>
                <CloseIcon />
              </Button>
              <LogoIcon />
              <Title>GSCORE</Title>
            </LogogContainer>

            <Link href="/subscriptions" passHref>
              <Subscriptions>My subscriptions</Subscriptions>
            </Link>

            <StyledAccordion
              trigger={
                <ButtonUser>
                  <UserName>{userName}</UserName>
                  <ChevronDownIcon />
                </ButtonUser>
              }
            />
          </Menu>
        </>
      ) : (
        <ButtonBurger onClick={handleVisibleMenu}>
          <BurgerIcon />
        </ButtonBurger>
      )}
    </Root>
  );
};

const Root = styled.div`
  max-width: 280px;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin-top: 23px;
  padding-left: 0;
`;

const Overlay = styled.div`
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.Overlay};
  left: 0;
  top: 0;
  position: fixed;
`;

const Button = styled.button`
  cursor: pointer;
  width: 24px;
  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_600};
  }
`;

const ButtonBurger = styled.button`
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_600};
  }
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;

const ButtonUser = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.Color_600};
  &:hover {
    border-bottom: 1px solid ${COLORS.Color_400};
  }
`;

const Title = styled.h2`
  font-size: 22px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const Menu = styled.body<{ $isVisible?: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 0;
  right: -10px;
  z-index: 30;
  width: 260px;
  height: 100vh;
  padding: 35px 24px 0px 24px;
  background-color: ${COLORS.Color_700};
  animation-duration: 1s;
  animation-name: fadeInDown;
  position: fixed;

  @keyframes fadeInDown {
    0% {
      transform: translate(-100%);
    }
    50% {
      transform: ${({ $isVisible }) =>
        $isVisible ? "translate(0)" : "translate(100%)"};
    }
    100% {
      transform: none;
    }
  }
`;

const LogogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const UserName = styled.div`
  cursor: pointer;
  bottom: 25px;
  left: 25px;
  font-size: 16px;
  color: ${COLORS.Color_100};
  font-family: ${TYPOGRAPHY.text_single};
`;

const Subscriptions = styled.a`
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.Color_100};
  border-bottom: 1px solid ${COLORS.Color_600};
  padding-bottom: 20px;
  font-family: ${TYPOGRAPHY.text_single};

  &:hover {
    border-bottom: 1px solid ${COLORS.Color_400};
  }
`;
