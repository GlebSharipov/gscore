import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { updateUser } from "src/services/requests";
import { UpdateUserRequestType } from "src/types";
import { addUserName } from "src/store/ducks/user";
import { useAppDispatch } from "src/store/store";
import { toast } from "react-toastify";

export const UpdateUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserRequestType>();

  const handleLogInSubmit: SubmitHandler<UpdateUserRequestType> = (data) => {
    setIsLoading(true);

    updateUser(data)
      .then((res) => {
        dispatch(addUserName(res.data.username));
        toast("Updating your data");
        reset();
      })
      .catch((error) => toast(error.response.data.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
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
