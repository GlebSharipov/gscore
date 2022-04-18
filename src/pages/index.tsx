import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { COLORS } from "../assets/constant/colors";
import {
  Header,
  Card,
  CardLicense,
  PricingCard,
  TabCreateAccount,
  TabProfile,
  BurgerMenu,
} from "../components";
import { Button, Input, Checkbox } from "../components/UI";

const Home: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const { query } = useRouter();

  const isTabOneSelected = !!query.createAccount;
  const isTabTwoSelected = !!query.logIn;
  const isTabThreeSelected = !!query.checkout;

  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
    if (value) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <Root>
      <Header />
      <Button primary text="Default" />
      <Input
        isSuccess={isSuccess}
        onChange={handleChange}
        value={value}
        placeholder="Placeholder"
      />

      <Checkbox checked={isChecked} onClick={handleChecked} />

      <BurgerMenu />

      <Card />
      <Card isDisabled />
      <CardLicense />

      <CreateAccount>
        <TabCreateAccount
          href="/?createAccount=true"
          title="Create account"
          isSelected={isTabOneSelected}
        />
        <TabCreateAccount
          href="/?logIn=true"
          title="Log in"
          isSelected={isTabTwoSelected}
        />
        <TabCreateAccount
          href="/?checkout=true"
          title="Checkout"
          isSelected={isTabThreeSelected}
        />
      </CreateAccount>

      <Profile>
        <TabProfile
          href="/?createAccount=true"
          title="Profile"
          isSelected={isTabOneSelected}
        />
        <TabProfile
          href="/?logIn=true"
          title="Subscriptions"
          isSelected={isTabTwoSelected}
        />
        <TabProfile
          href="/?checkout=true"
          title="Change password"
          isSelected={isTabThreeSelected}
        />
        <LineContinuation />
      </Profile>

      <PricingCard
        isOrange
        price="77"
        licenseTerm="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
      />

      <PricingCard
        price="117"
        licenseTerm="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
      />
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

const CreateAccount = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 620px;
`;

const Profile = styled.div`
  margin: 20px 0;
  display: flex;
  width: 100%;
`;

const LineContinuation = styled.div`
  width: 50%;
  height: 4px;
  margin-top: 32.5px;
  background-color: ${COLORS.Color_700};
`;

export default Home;
