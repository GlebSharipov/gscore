import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { BurgerIcon, ChevronDownIcon, CloseIcon, LogoIcon } from "icons";
import { Accordion } from "../Accordion";

interface BurgerMenuProps {
  isVisible?: boolean;
  userName: string;
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

            <Container>
              <Subscriptions>My subscriptions</Subscriptions>
            </Container>

            <Container>
              <StyledAccordion
                trigger={
                  <>
                    <UserName>{userName}</UserName>
                    <ButtonChevron>
                      <ChevronDownIcon />
                    </ButtonChevron>
                  </>
                }
              />
            </Container>
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
  overflow: hidden;
`;

const StyledAccordion = styled(Accordion)`
  position: absolute;
  bottom: -15px;
  left: -30px;
`;

const Overlay = styled.div`
  z-index: 20;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.Overlay};
  left: 0;
  top: 0;
  overflow-y: auto;
  position: fixed;
`;

const Button = styled.button`
  cursor: pointer;
  width: 18px;
  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_600};
  }
`;

const ButtonBurger = styled.button`
  position: absolute;
  right: 0;
  top: 45px;
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

const ButtonChevron = styled.button`
  position: absolute;
  cursor: pointer;
  right: -50px;
  top: -20px;
  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_600};
  }
`;

const Title = styled.h2`
  font-size: 22px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const Menu = styled.div<{ $isVisible?: boolean }>`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 30;
  width: 260px;
  height: 100vh;
  padding: 35px 24px 0px 24px;
  background-color: ${COLORS.Color_700};
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeInDown;

  @keyframes fadeInDown {
    0% {
      transform: ${({ $isVisible }) =>
        $isVisible ? "translate(0)" : "translate(100%)"};
    }
    100% {
      transform: none;
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid ${COLORS.Color_600};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;
`;

const LogogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const UserName = styled.p`
  cursor: pointer;
  position: absolute;
  bottom: 25px;
  left: 30px;
  font-size: 16px;
  color: ${COLORS.Color_100};
`;

const Subscriptions = styled.a`
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.Color_100};
`;
