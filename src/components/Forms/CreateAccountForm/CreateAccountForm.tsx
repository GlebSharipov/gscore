import React, { FC, useState } from "react";
import { COLORS, ROUTES } from "assets/constant";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signUp } from "src/services/requests";
import { SignUpRequestType } from "src/types";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const CreateAccountForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpRequestType>();

  const handleRegisterSubmit: SubmitHandler<SignUpRequestType> = (data) => {
    setIsLoading(true);

    signUp(data)
      .then(() => {
        toast("Registration completed successfully");
        router.push(ROUTES.LOG_IN);
      })
      .catch((error) => toast(error.response.data.message))
      .finally(() => setIsLoading(false));

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

      <StyledButton isLoading={isLoading} type="submit" text="Send password" />
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
  color: ${COLORS.Primary_1};
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  margin-bottom: 48px;
`;
