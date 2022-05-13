import React, { FC, useState } from "react";
import { COLORS, ROUTERS } from "assets/constant";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signIn } from "src/services/requests";
import { SignInRequestType } from "src/types";
import { addUserName, addUserToken } from "src/store/ducks/user";
import { useAppDispatch } from "src/store/store";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInRequestType>();

  const handleLogInSubmit: SubmitHandler<SignInRequestType> = (data) => {
    setIsLoading(true);

    signIn(data)
      .then((res) => {
        dispatch(addUserName(res.data.user.username));
        dispatch(addUserToken(res.data.token));
        toast("Correct password");
        router.push(ROUTERS.CHECKOUT);
      })
      .catch((error) => toast(error.response.data.message))
      .finally(() => setIsLoading(false));

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

      <StyledButton isLoading={isLoading} type="submit" text="Log in" />
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
