import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { userAPI } from "src/pages/services/requests";
import {
  UpdatePasswordRequestType,
  UpdatePasswordResponseType,
} from "src/types";

export const UpdatePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePasswordRequestType>();

  const handleLogInSubmit: SubmitHandler<UpdatePasswordRequestType> = (
    data
  ) => {
    userAPI.updatePassword(data);
    reset();
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
      <Error>
        {errors.currentPassword && <p>{errors.currentPassword.message}</p>}
      </Error>
      <StyledInput
        {...register("currentPassword", {
          required: "field cannot be empty",
          minLength: {
            value: 6,
            message: "password cannot be shorter than 6 characters ",
          },
        })}
        type="password"
        result="initial"
        placeholder="Current Password"
      />

      <Error>{errors.newPassword && <p>{errors.newPassword.message}</p>}</Error>
      <StyledInput
        {...register("newPassword", {
          required: "field cannot be empty",
          minLength: {
            value: 6,
            message: "password cannot be shorter than 6 characters ",
          },
        })}
        result="initial"
        type="password"
        placeholder="New Password"
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
