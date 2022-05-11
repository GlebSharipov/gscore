import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { updateUser } from "src/services/requests";
import { UpdateUserRequestType, UpdateUserResponseType } from "src/types";
import { addUserName } from "src/store/ducks/user";
import { useAppDispatch } from "src/store/store";
import { ToastContainer, toast } from "react-toastify";

export const UpdateUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const notify = (text: string) => toast(text);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserRequestType>();

  const handleLogInSubmit: SubmitHandler<UpdateUserRequestType> = async (
    data
  ) => {
    setIsLoading(true);
    try {
      const { username } = await updateUser(data).then((res) => res.data);

      notify("Updating your data");
      dispatch(addUserName(username));
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
      <Error>{errors.username && <p>{errors.username.message}</p>}</Error>
      <StyledInput
        {...register("username", {
          required: "field cannot be empty",
        })}
        variant="initial"
        placeholder="User Name"
      />

      <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
      <StyledInput
        {...register("email", {
          required: "field cannot be empty",
        })}
        variant="initial"
        type="email"
        placeholder="Email"
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
