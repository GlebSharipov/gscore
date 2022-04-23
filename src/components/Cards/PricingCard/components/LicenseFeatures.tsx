import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { CheckIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";

interface LicenseFeaturesProps {
  features: string[];
  isSecondType?: boolean;
}

export const LicenseFeatures: FC<LicenseFeaturesProps> = ({
  features,
  isSecondType,
}) => {
  return (
    <Root>
      {features.map((text, index) => (
        <CheckContainer key={index}>
          <Check>
            <StyledCheckIcon
              color={isSecondType ? COLORS.Primari_1 : COLORS.Color_700}
            />
          </Check>
          <Description>{text}</Description>
        </CheckContainer>
      ))}
    </Root>
  );
};

const Root = styled.ul`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Check = styled.div`
  display: flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${COLORS.Color_100};
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 26px;
  height: 26px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 270px;
  margin-left: 10px;
  word-break: break-all;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
