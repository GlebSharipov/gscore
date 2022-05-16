import React, { FC, useState } from "react";
import Link from "next/link";
import { useAppSelector, RootState } from "src/store/store";
import { Accordion } from "../Accordion";
import { COLORS } from "src/constant";
import styled from "styled-components";
import { LogoIcon } from "icons";
import { ChevronDownIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";
import { BurgerMenu } from "../BurgerMenu";

export const Header: FC = () => {
  const userName = useAppSelector((state: RootState) => state.user.userName);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Root>
      <Link href="/" passHref>
        <ContainerLogo>
          <LogoIcon />
          <Title>GSCORE</Title>
        </ContainerLogo>
      </Link>

      <BurgerMenu userName={userName} />

      {userName && (
        <Container>
          <Link href="/subscriptions" passHref>
            <Subscriptions>My subscriptions</Subscriptions>
          </Link>

          <Accordion
            onOpen={setIsOpen}
            isOpen={isOpen}
            trigger={
              <UserButton onClick={() => setIsOpen(true)}>
                <UserName>{userName}</UserName>
                <ChevronDownIcon />
              </UserButton>
            }
          />
        </Container>
      )}
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  min-height: 122px;
  background-color: ${COLORS.Color_800};
`;

const ContainerLogo = styled.a`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

const UserName = styled.h2`
  font-size: 20px;
  margin-right: 12px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;

const Title = styled.h1`
  font-size: 22px;
  margin-left: 10px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const UserButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${COLORS.Color_800};

  &:hover {
    border-bottom: 2px solid ${COLORS.Color_500};
  }
`;

const Subscriptions = styled.a`
  cursor: pointer;
  margin-right: 32px;
  margin-top: 2px;
  font-size: 20px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
  border-bottom: 2px solid ${COLORS.Color_800};

  &:hover {
    border-bottom: 2px solid ${COLORS.Color_500};
  }
`;
