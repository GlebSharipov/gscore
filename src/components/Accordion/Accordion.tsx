import React, { FC, useState } from "react";
import Link from "next/link";
import Collapsible from "react-collapsible";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { SettingsIcon, LogoutIcon } from "../icons";
import { TYPOGRAPHY } from "assets/styles/typography";

interface AccordionProps {
  className?: string;
  isOpen?: boolean;
  onOpen: (isOpen: boolean) => void;
  trigger:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const Accordion: FC<AccordionProps> = ({
  className,
  trigger,
  isOpen,
  onOpen,
}) => {
  const hadleLogout = () => {
    localStorage.removeItem("userName");
    onOpen(false);
  };

  return (
    <Root className={className}>
      <Collapsible trigger={trigger} transitionTime={200} open={isOpen}>
        <Menu>
          <Container>
            <Link href="/settings-profile" passHref>
              <Settings onClick={() => onOpen(false)}>
                <SettingsIcon />
                <Text>Settings</Text>
              </Settings>
            </Link>
          </Container>

          <Container>
            <LogoutButton onClick={hadleLogout}>
              <LogoutIcon />
              <Text>Logout</Text>
            </LogoutButton>
          </Container>
        </Menu>
      </Collapsible>
    </Root>
  );
};

const Root = styled.div`
  .Collapsible {
    height: 25px;
  }
  .Collapsible__trigger {
    &.is-open {
      svg {
        transform: scale(-1);
      }
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 136px;
  border-radius: 12px;
  margin-top: 30px;
  padding: 29px 52px 0px 27px;
  background-color: ${COLORS.Color_700};
`;

const Container = styled.li`
  font-size: 20px;
  color: ${COLORS.Color_100};
  display: flex;
  margin-bottom: 34px;
`;

const Text = styled.div`
  font-size: 20px;
  margin-left: 10px;
  color: ${COLORS.Color_500};
  font-family: ${TYPOGRAPHY.text_single};
`;

const Settings = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${COLORS.Color_700};
  &:hover {
    border-bottom: 2px solid ${COLORS.Color_500};
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${COLORS.Color_700};
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${COLORS.Color_500};
  }
`;
