import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signUp } from "src/services/requests";
import { SignUpRequestType, SignUpResponseType } from "src/types";

interface CreateAccountFormProps {
  onUpdateTabIndex: (index: number) => void;
}

export const CreateAccountForm: FC<CreateAccountFormProps> = ({
  onUpdateTabIndex,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpRequestType>();

  const handleRegisterSubmit: SubmitHandler<SignUpRequestType> = async (
    data
  ) => {
    const { token } = await signUp(data);
    localStorage.setItem("token", token);

    if (token) {
      onUpdateTabIndex(1);
    }

    reset();
  };

  return (
    <Root onSubmit={handleSubmit(handleRegisterSubmit)}>
      <Error>{errors.username && <p>{errors.username.message}</p>}</Error>
      <StyledInput
        {...register("username", {
          required: "field cannot be empty",
        })}
        variant="initial"
        placeholder="Username"
      />

      <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
      <StyledInput
        {...register("email", {
          required: "field cannot be empty",
        })}
        type="email"
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
