import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { userAPI } from "src/pages/services/requests";
import { SignUpRequestType, SignUpResponseType } from "src/types";

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpRequestType>();

  const handleRegisterSubmit: SubmitHandler<SignUpRequestType> = (data) => {
    const token = userAPI.signUp(data).then((res) => res.data);
    localStorage.setItem("token", JSON.stringify(token));
    reset();
  };

  return (
    <Root onSubmit={handleSubmit(handleRegisterSubmit)}>
      <Error>{errors.username && <p>{errors.username.message}</p>}</Error>
      <StyledInput
        {...register("username", {
          required: "field cannot be empty",
        })}
        result="initial"
        placeholder="Username"
      />

      <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
      <StyledInput
        {...register("email", {
          required: "field cannot be empty",
        })}
        type="email"
        result="initial"
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
        result="initial"
        type="password"
        placeholder="Password"
      />

      <StyledButton type="submit" text="Send password" />
    </Root>
  );
};

const Root = styled.form`
  width: 100%;
`;

const StyledInput = styled(Input)`
  max-width: 620px;
`;

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.Primari_1};
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  margin-bottom: 48px;
`;
