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
  PRODUCT = "products",
  PAYMENT = "payments/buy",
  CODE_ACTIVATE = "code/activate",
  CODE_SELF = "code/self",
  CODE_HEALTH = "code/health",
  CODE_MANAGE = "code/manage",
  SUBSCRIBE_SELF = "subscribe/self",
  CHANGE_PRODUCT = "subscribe/change-product",
  SIGN_IN = "users/sign-in",
  SIGN_UP = "users/sign-up",
  USER = "users",
  UPDATE_PASSWORD = "users/update-password",
  USER_ME = "users/me",
}

export const getProducts = async () => {
  return get<ProductType[]>(Endpoints.PRODUCT).then((res) => res.data);
};

export const buySubscribe = async (priceId: number) => {
  return post<BuySubscribeResponseType>(Endpoints.PAYMENT, {
    priceId: priceId,
  });
};

export const codeActivate = async (code: string) => {
  return post<CodeType>(Endpoints.CODE_ACTIVATE, { code: code });
};

export const constcodeSelf = async () => {
  return get(Endpoints.CODE_SELF);
};

export const codeHealth = async (code: string) => {
  return post(Endpoints.CODE_HEALTH, { code: code });
};

export const codeManage = async ({
  codesIds,
  subscribeId,
}: CodeManageRequestType) => {
  return put(Endpoints.CODE_MANAGE, { codesIds, subscribeId });
};

export const subscribeSelf = async () => {
  return get<SubscribesResponseType>(Endpoints.SUBSCRIBE_SELF);
};

export const subscribeChangeProduct = async ({
  productId,
  subscribeId,
}: ChangeSubscribeRequestType) => {
  return post(Endpoints.CHANGE_PRODUCT, { productId, subscribeId });
};

export const signIn = async ({ email, password }: SignInRequestType) => {
  return post<SignInResponseType>(Endpoints.SIGN_IN, { email, password });
};

export const signUp = async ({
  email,
  username,
  password,
}: SignUpRequestType) => {
  return post<SignUpResponseType>(Endpoints.SIGN_UP, {
    email,
    username,
    password,
  });
};

export const updateUser = async ({
  email,
  username,
}: UpdateUserRequestType) => {
  return patch<UpdateUserResponseType>(Endpoints.USER, { email, username });
};

export const updatePassword = async ({
  currentPassword,
  newPassword,
}: UpdatePasswordRequestType) => {
  return patch<UpdatePasswordResponseType>(Endpoints.UPDATE_PASSWORD, {
    currentPassword,
    newPassword,
  });
};

export const usersMe = async () => {
  return get<UserType>(Endpoints.USER_ME);
};
