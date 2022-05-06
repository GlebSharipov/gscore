import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { TwitterIcon, LinkedInIcon, FacebookIcon, LogoIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";
import dayjs from "dayjs";

export const Footer: FC = () => {
  const year = dayjs().format("YYYY");

  return (
    <Root>
      <TopPartFooter>
        <ContainerLogo>
          <LogoIcon />
          <Title>GSCORE</Title>
        </ContainerLogo>
        <Text>
          Ut enim ad minim veniam quis <br /> nostrud exercitation ea commodo
        </Text>
      </TopPartFooter>

      <BottomPartFooter>
        <Copyright>
          Copyright © {year} GScore | All Rights Reserved |<Link>Cookies</Link>|
          <Link>Privacy Policy</Link>
        </Copyright>

        <IconContainer>
          <SocialLink>
            <FacebookIcon />
          </SocialLink>

          <SocialLink>
            <TwitterIcon />
          </SocialLink>

          <SocialLink>
            <LinkedInIcon />
          </SocialLink>
        </IconContainer>
      </BottomPartFooter>
    </Root>
  );
};

const Root = styled.footer`
  padding-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.Color_700};
  background-color: ${COLORS.Color_800};
`;

const TopPartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 44px;
  border-bottom: 1px solid ${COLORS.Color_700};
`;

const ContainerLogo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-left: 10px;
  letter-spacing: 2px;
  color: ${COLORS.Color_100};
`;

const Text = styled.div`
  font-size: 18px;
  margin-bottom: 60px;
  color: ${COLORS.Color_400};
  ${TYPOGRAPHY.footer}
`;

const BottomPartFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  font-size: 18px;
  color: ${COLORS.Color_400};
  ${TYPOGRAPHY.footer}
  @media (max-width: 576px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 18px;
  border-bottom: 2px solid ${COLORS.Color_100};
  color: ${COLORS.Color_100};

  &:hover {
    border: none;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  border-bottom: 1px solid;
  &:hover {
    border-bottom: 1px solid ${COLORS.Primari_1};
  }
`;

const IconContainer = styled.div`
  max-width: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
