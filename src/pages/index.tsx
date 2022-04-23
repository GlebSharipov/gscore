import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import {
  Header,
  Card,
  CardLicense,
  PricingCard,
  TabCreateAccount,
  TabProfile,
} from "../components";
import {
  userData,
  cardLicenseData,
  pricingCardData,
} from "src/components/utils/mock";
import { Button, Input, Checkbox } from "UI";

const Home: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const price = pricingCardData.map((card) => card.price);
  const userName = userData["user"];

  const handleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Root>
      <Header userName={userName} />

      <Button variant="text" text="Default" />
      <Button variant="primary" text="Default" />
      <Button variant="secondary" text="Default" />
      <Button isDisabled variant="secondary" text="Default" />

      <Input
        result="initial"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        isDisabled
        result="initial"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        result="error"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />
      <Input
        result="success"
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />

      <Checkbox checked={isChecked} onClick={handleChecked} />
      <Checkbox checked isDisabled onClick={handleChecked} />
      <Checkbox isDisabled onClick={handleChecked} />

      <Card price={price[0]} />
      <Card price={price[1]} isDisabled />

      {cardLicenseData.map((card) => (
        <CardLicense key={card.code} domain={card.domain} code={card.code} />
      ))}

      <TabCreateAccount />

      <TabProfile />

      {pricingCardData.map((card) => (
        <PricingCard
          isSecondType={card.isSecondType}
          key={card.licenseTerm}
          price={card.price}
          licenseTerm={card.licenseTerm}
          features={card.features}
          description={card.description}
        />
      ))}
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

export default Home;
