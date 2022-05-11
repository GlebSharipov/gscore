import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signIn } from "src/services/requests";
import { SignInRequestType } from "src/types";
import { addUserName } from "src/store/ducks/user";
import { useAppDispatch } from "src/store/store";
import { ToastContainer, toast } from "react-toastify";

interface LoginFormProps {
  onUpdateTabIndex: (index: number) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onUpdateTabIndex }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const notify = (text: string) => toast(text);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInRequestType>();

  const handleLogInSubmit: SubmitHandler<SignInRequestType> = async (data) => {
    setIsLoading(true);
    try {
      const { user } = await signIn(data).then((res) => res.data);
      notify("Correct password");
      dispatch(addUserName(user.username));
      setIsLoading(false);

      if (user.username) {
        onUpdateTabIndex(2);
      }

      reset();
    } catch (error: any) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <Root onSubmit={handleSubmit(handleLogInSubmit)}>
      <ToastContainer />
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
