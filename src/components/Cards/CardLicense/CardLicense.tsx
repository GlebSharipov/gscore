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
  margin-top: 30px;
  display: grid;
  grid-template-rows: 153px;
  grid-template-columns: repeat(4, auto);
  grid-template-areas: "checkbox license domain status";
  max-width: 1268px;
  align-items: center;
  padding: 0 79px 0 32px;
  border-radius: 12px;
  background-color: ${COLORS.Color_700};

  @media (max-width: 375px) {
    width: 100%;
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
  @media (max-width: 375px) {
    margin: 0;
  }
`;

const Code = styled.p`
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
  margin-right: 48px;
  margin-top: 30px;
  @media (max-width: 375px) {
    margin-top: 25px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 111px;
  height: 58px;
  margin-top: 38px;
  margin-right: 65px;
  @media (max-width: 375px) {
    margin: 0;
    margin-left: 55px;
  }
`;

const CodeContainer = styled.div`
  grid-area: license;
  display: flex;
  margin-right: 28px;
  flex-direction: column;
  max-width: 296px;

  @media (max-width: 375px) {
    max-width: 360px;
    margin: 0;
  }
`;

const DomainContainer = styled.div`
  grid-area: domain;
  display: flex;
  flex-direction: column;
  max-width: 620px;
  @media (max-width: 375px) {
    max-width: 360px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StatusContainer = styled.div`
  grid-area: status;
  margin-left: 56px;
  margin-top: 5px;
  display: flex;
  max-width: 330px;
  @media (max-width: 375px) {
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
  color: ${COLORS.Color_500};
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
  height: 68px;
  min-width: 450px;
  padding: 25px 50px 25px 24px;
  border-radius: 6px;
  background-color: ${COLORS.Color_600};

  @media (max-width: 375px) {
    min-width: 250px;
  }
`;

const Domain = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.Color_500};
  ${TYPOGRAPHY.paragraph}
`;
