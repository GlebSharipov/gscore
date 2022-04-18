import React, { FC, useState } from "react";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";
import { Button, Status, Checkbox } from "../../UI";
import { CopyIcon } from "../../icons";

interface CardLicenseProps {
  className?: string;
}

export const CardLicense: FC<CardLicenseProps> = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [domen, setDomen] = useState("");

  const handleChecked = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleDomen = () => {
    setDomen(
      "https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0asdasdadasdasdadasd..."
    );
  };

  return (
    <Root className={className}>
      <StyledCheckbox checked={visible} onClick={handleChecked} />

      <Container>
        <Title>License code</Title>
        <LicenseCode>
          <LicenseText>sl=ru&tl=en&texte=%D0...</LicenseText>
          <ButtonCopy>
            <CopyIcon />
          </ButtonCopy>
        </LicenseCode>
      </Container>

      <Container>
        <Title>Domain</Title>
        <Domain>{domen}</Domain>
      </Container>

      {!domen && <StyledButton onClick={handleDomen} text="Activate" />}

      <Container>
        <Title>Status</Title>
        {domen ? <Status isActive /> : <Status isInactive />}
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  max-width: 1268px;
  padding: 31px 79px 31px 32px;
  border-radius: 12px;
  background-color: ${COLORS.Color_700};
`;

const LicenseCode = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  max-width: 296px;
  margin-right: 28px;
  padding: 6px 20px 6px 24px;
  background-color: ${COLORS.Color_600};
`;

const LicenseText = styled.p`
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.Color_500};
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 48px;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  max-width: 111px;
  margin: 30px 56px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
  top: 0px;
  color: ${COLORS.Color_500};
`;

const ButtonCopy = styled.button`
  cursor: pointer;
  max-width: 50px;
`;

const Domain = styled.div`
  width: 100%;
  min-width: 450px;
  min-height: 68px;
  flex: 0;
  padding: 25px 34px 25px 24px;
  border-radius: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${COLORS.Color_600};
  color: ${COLORS.Color_500};
`;
