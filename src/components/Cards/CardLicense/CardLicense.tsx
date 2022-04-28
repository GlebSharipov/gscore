import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { TYPOGRAPHY } from "assets/styles/typography";
import styled from "styled-components";
import { Button, Status, Checkbox } from "UI";
import { CopyIcon } from "icons";

interface CardLicenseProps {
  className?: string;
  code?: string;
  domain?: string;
}

export const CardLicense: FC<CardLicenseProps> = ({
  className,
  code,
  domain,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <Root className={className}>
      <StyledCheckbox checked={isChecked} onClick={handleChecked} />

      <CodeContainer>
        <Title>License code</Title>
        <LicenseCode>
          <Code>{code}</Code>
          <ButtonCopy>
            <CopyIcon />
          </ButtonCopy>
        </LicenseCode>
      </CodeContainer>

      <DomainContainer>
        <Title>Domain</Title>
        <Container>
          <Domain>{domain}</Domain>
        </Container>
      </DomainContainer>

      <StatusContainer>
        {!domain && <StyledButton variant="secondary" text="Activate" />}
        <TitleContainer>
          <TitleStatus>Status</TitleStatus>
          {domain ? <Status isActive /> : <Status isInactive />}
        </TitleContainer>
      </StatusContainer>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-rows: 153px;
  grid-template-columns: 70px 1fr minmax(200px, 620px) 1fr;
  grid-template-areas: "checkbox license domain status";
  max-width: 1268px;
  align-items: center;
  padding: 0 6% 0 2%;
  border-radius: 12px;
  background-color: ${COLORS.Color_700};

  @media (max-width: 1100px) {
    max-width: 500px;
    grid-template-columns: 30px 1fr;
    grid-template-rows: 80px 130px 130px;
    grid-template-areas:
      "checkbox status"
      "license license"
      "domain domain";
    padding: 0 12px 32px 12px;
  }
`;

const LicenseCode = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  margin-right: 28px;
  padding: 6px 20px 6px 24px;
  background-color: ${COLORS.Color_600};

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

const Code = styled.div`
  width: 100%;
  margin-right: 28px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.Color_500};
  ${TYPOGRAPHY.text_single}
`;

const StyledCheckbox = styled(Checkbox)`
  grid-area: checkbox;
  margin-top: 40px;

  @media (max-width: 1100px) {
    margin-top: 25px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 111px;
  height: 58px;
  margin-top: 38px;
  margin-right: 65px;

  @media (max-width: 1140px) {
    margin-right: 25px;
  }

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

const CodeContainer = styled.div`
  grid-area: license;
  display: flex;
  margin-right: 28px;
  flex-direction: column;
  max-width: 296px;

  @media (max-width: 1100px) {
    max-width: 480px;
    margin: 0;
  }
`;

const DomainContainer = styled.div`
  grid-area: domain;
  display: flex;
  flex-direction: column;
  max-width: 620px;
  width: 100%;

  @media (max-width: 375px) {
    max-width: 360px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled.div`
  grid-area: status;
  max-width: 260px;
  margin-left: 56px;
  margin-top: 5px;
  display: flex;

  @media (max-width: 1100px) {
    max-width: 400px;
    margin: 0;
    margin-left: 20px;
    align-items: flex-start;
    margin-top: 24px;
    flex-direction: row-reverse;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
  margin-right: 30px;
  color: ${COLORS.Color_500};
  font-family: ${TYPOGRAPHY.paragraph};
`;

const TitleStatus = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
  margin-right: 34px;
  color: ${COLORS.Color_500};

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

const ButtonCopy = styled.button`
  cursor: pointer;
  max-width: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 68px;
  width: 100%;
  padding: 0 50px 0 24px;
  border-radius: 6px;
  background-color: ${COLORS.Color_600};
`;

const Domain = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.Color_500};
  ${TYPOGRAPHY.paragraph}
`;
