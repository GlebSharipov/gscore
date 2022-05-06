import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signIn } from "src/services/requests";
import { SignInRequestType, SignInResponseType } from "src/types";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInRequestType>();

  const handleLogInSubmit: SubmitHandler<SignInRequestType> = async (data) => {
    const { user } = await signIn(data);
    localStorage.setItem("userName", user.username);

    reset();
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
      <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
      <StyledInput
        type="email"
        {...register("email", {
          required: "field cannot be empty",
        })}
        variant="initial"
        placeholder="Email"
      />

      <Error>{errors.password && <p>{errors.password.message}</p>}</Error>
      <StyledInput
        {...register("password", {
          required: "field cannot be empty",
          minLength: {
            value: 6,
            message: "password cannot be shorter than 6 characters ",
          },
        })}
        variant="initial"
        type="password"
        placeholder="Password"
      />

      <StyledButton type="submit" text="Log in" />
    </Root>
  );
};

const Root = styled.form`
  width: 100%;
`;

const StyledInput = styled(Input)`
  max-width: 620px;
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  margin-bottom: 48px;
`;

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.Primari_1};
`;
