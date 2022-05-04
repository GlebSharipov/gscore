import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { userData } from "src/components/utils/mock";
import { COLORS } from "assets/constant/colors";

interface LoyoutProps {
  children: React.ReactNode;
  userName?: string;
}

export const Layout: FC<LoyoutProps> = ({ children, userName }) => {
  return (
    <Root>
      <Container>
        <Header userName={userName} />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${COLORS.Color_800};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  padding: 0 86px 42px;
  background-color: ${COLORS.Color_800};
  @media (max-width: 720px) {
    padding: 0 10px 20px;
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
`;
