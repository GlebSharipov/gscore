import React, { FC, useState } from "react";
import { COLORS } from "assets/constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button, Input } from "UI";
import { signUp } from "src/services/requests";
import { SignUpRequestType } from "src/types";
import { addUserToken } from "src/store/ducks/user";
import { useAppDispatch } from "src/store/store";
import { ToastContainer, toast } from "react-toastify";

interface CreateAccountFormProps {
  onUpdateTabIndex: (index: number) => void;
}

export const CreateAccountForm: FC<CreateAccountFormProps> = ({
  onUpdateTabIndex,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = (text: string) => toast(text);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpRequestType>();

  const handleRegisterSubmit: SubmitHandler<SignUpRequestType> = async (
    data
  ) => {
    setIsLoading(true);
    try {
      const { token } = await signUp(data);
      notify("Registration completed successfully");
      dispatch(addUserToken(token));
      setIsLoading(false);

      if (token) {
        onUpdateTabIndex(1);
      }

      reset();
    } catch (error: any) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <Root onSubmit={handleSubmit(handleRegisterSubmit)}>
      <ToastContainer />
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
