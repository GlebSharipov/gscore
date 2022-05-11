import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { updatePassword } from "src/services/requests";
import { UpdatePasswordRequestType } from "src/types";
import { ToastContainer, toast } from "react-toastify";

export const UpdatePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = (text: string) => toast(text);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePasswordRequestType>();

  const handleLogInSubmit: SubmitHandler<UpdatePasswordRequestType> = async (
    data
  ) => {
    setIsLoading(true);
    try {
      await updatePassword(data);
      notify("Password updated");
      setIsLoading(false);

      reset();
    } catch (error: any) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
      <ToastContainer />
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
        variant="initial"
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
        variant="initial"
        type="password"
        placeholder="New Password"
      />

      <StyledButton isLoading={isLoading} type="submit" text="Save" />
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
  color: ${COLORS.Primary_1};
`;
