import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { userAPI } from "src/pages/services/requests";
import { UpdateUserRequestType, UpdateUserResponseType } from "src/types";

export const UpdateUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserRequestType>();

  const handleLogInSubmit: SubmitHandler<UpdateUserRequestType> = (data) => {
    userAPI.updateUser(data);
    reset();
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
      <Error>{errors.username && <p>{errors.username.message}</p>}</Error>
      <StyledInput
        {...register("username", {
          required: "field cannot be empty",
        })}
        result="initial"
        placeholder="User Name"
      />

      <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
      <StyledInput
        {...register("email", {
          required: "field cannot be empty",
        })}
        result="initial"
        type="email"
        placeholder="Email"
      />

      <StyledButton type="submit" text="Save" />
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
