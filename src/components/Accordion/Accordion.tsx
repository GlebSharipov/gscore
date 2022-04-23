import React, { FC } from "react";
import Collapsible from "react-collapsible";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { SettingsIcon, LogoutIcon } from "../icons";

interface AccordionProps {
  className?: string;
  trigger:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const Accordion: FC<AccordionProps> = ({ className, trigger }) => {
  return (
    <Root className={className}>
      <Collapsible trigger={trigger}>
        <Menu>
          <Container>
            <Button>
              <SettingsIcon />
            </Button>
            <Text>Settings</Text>
          </Container>

          <Container>
            <Button>
              <LogoutIcon />
            </Button>
            <Text>Logout</Text>
          </Container>
        </Menu>
      </Collapsible>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 30px;
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

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 136px;
  border-radius: 12px;
  margin-top: 20px;
  padding: 29px 52px 29px 27px;
  background-color: ${COLORS.Color_700};
`;

const Container = styled.div`
  font-size: 20px;
  color: ${COLORS.Color_100};
  display: flex;
  margin-bottom: 34px;
`;

const Text = styled.a`
  font-size: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  max-width: 24px;
  margin-right: 18px;
  text-align: start;
  cursor: pointer;
  color: ${COLORS.Color_100};

  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_500};
  }
`;
