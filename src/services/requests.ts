import ApiService from "./api";
import {
  BuySubscribeResponseType,
  ProductType,
  UserType,
  SignInRequestType,
  SignInResponseType,
  SignUpRequestType,
  SignUpResponseType,
  UpdateUserRequestType,
  UpdateUserResponseType,
  UpdatePasswordRequestType,
  UpdatePasswordResponseType,
  CodeType,
  CodeManageRequestType,
  SubscribesResponseType,
  ChangeSubscribeRequestType,
} from "src/types";

const { get, post, put, patch } = ApiService;

enum Endpoints {
  Product = "products",
  Payment = "payments/buy",
  CodeActivate = "code/activate",
  CodeSelf = "code/self",
  CodeHealth = "code/health",
  CodeMange = "code/manage",
  SubscribeSelf = "subscribe/self",
  ChabgeProduct = "subscribe/change-product",
  SignIn = "users/sign-in",
  SignUp = "users/sign-up",
  User = "users",
  UpdatePassword = "users/update-password",
  UserMe = "users/me",
}

export const getProducts = async () => {
  return get<ProductType[]>(Endpoints.Product).then((res) => res.data);
};

export const buySubscribe = async (priceId: number) => {
  return post<BuySubscribeResponseType>(Endpoints.Payment, {
    priceId: priceId,
  });
};

export const codeActivate = async (code: string) => {
  return post<CodeType>(Endpoints.CodeActivate, { code: code });
};

export const constcodeSelf = async () => {
  return get(Endpoints.CodeSelf);
};

export const codeHealth = async (code: string) => {
  return post(Endpoints.CodeHealth, { code: code });
};

export const codeManage = async ({
  codesIds,
  subscribeId,
}: CodeManageRequestType) => {
  return put(Endpoints.CodeMange, { codesIds, subscribeId });
};

export const subscribeSelf = async () => {
  return get<SubscribesResponseType>(Endpoints.SubscribeSelf);
};

export const subscribeChangeProduct = async ({
  productId,
  subscribeId,
}: ChangeSubscribeRequestType) => {
  return post(Endpoints.ChabgeProduct, { productId, subscribeId });
};

export const signIn = async ({ email, password }: SignInRequestType) => {
  return post<SignInResponseType>(Endpoints.SignIn, { email, password });
};

export const signUp = async ({
  email,
  username,
  password,
}: SignUpRequestType) => {
  return post<SignUpResponseType>(Endpoints.SignUp, {
    email,
    username,
    password,
  });
};

export const updateUser = async ({
  email,
  username,
}: UpdateUserRequestType) => {
  return patch<UpdateUserResponseType>(Endpoints.User, { email, username });
};

export const updatePassword = async ({
  currentPassword,
  newPassword,
}: UpdatePasswordRequestType) => {
  return patch<UpdatePasswordResponseType>(Endpoints.UpdatePassword, {
    currentPassword,
    newPassword,
  });
};

export const usersMe = async () => {
  return get<UserType>(Endpoints.UserMe);
};
