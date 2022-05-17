import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import {
  Card,
  CardLicense,
  TabCreateAccount,
  TabProfile,
  Header,
} from "../components";
import { cardsLicenseData, pricingCardsData } from "src/components/utils/mock";
import { Button, Input, Checkbox } from "UI";

const UiKit: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const prices = pricingCardsData.map((card) => card.price);

  const handleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Root>
      <Header />
      <Button variant="text" text="Default" />
      <Button variant="primary" text="Default" />
      <Button variant="secondary" text="Default" />
      <Button isDisabled variant="secondary" text="Default" />

      <Input
        variant="initial"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        isDisabled
        variant="initial"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        variant="error"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        variant="success"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />

      <Checkbox checked={isChecked} onClick={handleChecked} />
      <Checkbox checked isDisabled onClick={handleChecked} />
      <Checkbox isDisabled onClick={handleChecked} />

      <Card onClick={() => {}} cardName="Three cites" price={prices[0]} />
      <Card
        onClick={() => {}}
        cardName="Three cites"
        price={prices[1]}
        isDisabled
      />

      {cardsLicenseData.map((card) => (
        <CardLicense
          onClick={() => {}}
          key={card.code}
          domain={card.domain}
          code={card.code}
        />
      ))}

      <TabCreateAccount tabId={1} />

      <TabProfile />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: auto;
  position: fixed;
  background-color: ${COLORS.Color_800};
`;

export default UiKit;
