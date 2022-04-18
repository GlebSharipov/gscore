import React, { FC, useState } from "react";
import { COLORS } from "../../assets/constant/colors";
import styled from "styled-components";
import { BurgerIcon, ChevronDownIcon, CloseIcon, LogoIcon } from "../icons";
import { Accordion } from "../../components";

interface BurgerMenuProps {
  isVisible?: boolean;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ isVisible }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleVisibleMenu = () => {
    if (visibleMenu) {
      setVisibleMenu(false);
    } else {
      setVisibleMenu(true);
    }
  };

  return (
    <Root isVisible={isVisible}>
      {visibleMenu ? (
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
            <UserName>Alex</UserName>
            <StyledAccordion
              trigger={
                <ButtonChevron>
                  <ChevronDownIcon />
                </ButtonChevron>
              }
            />
          </Container>
        </Menu>
      ) : (
        <Button onClick={handleVisibleMenu}>
          <BurgerIcon />
        </Button>
      )}
    </Root>
  );
};

const Root = styled.div<{ isVisible?: boolean }>`
  border-radius: 12px;
  max-width: 620px;
`;

const Button = styled.button`
  cursor: pointer;
`;

const ButtonChevron = styled.button`
  position: absolute;
  cursor: pointer;
  right: -50px;
  top: -35px;
`;

const Title = styled.h2`
  font-size: 22px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const Menu = styled.div`
  max-width: 260px;
  height: 100%;
  padding: 35px 24px 500px 24px;
  background-color: ${COLORS.Color_700};
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
  font-size: 16px;
  color: ${COLORS.Color_100};
`;

const Subscriptions = styled.p`
  font-size: 16px;
  color: ${COLORS.Color_100};
`;

const StyledAccordion = styled(Accordion)`
  position: absolute;
  bottom: -15px;
  left: -25px;
`;
