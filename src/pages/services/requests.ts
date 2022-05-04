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

export const productAPI = {
  getProducts() {
    return get<ProductType[]>("products").then((res) => res.data);
  },

  buySubscribe(priceId: number) {
    return post<BuySubscribeResponseType>("payments/buy", {
      priceId: priceId,
    });
  },
};

export const codeAPI = {
  codeActivate(code: string) {
    return post<CodeType>("code/activate", { code: code });
  },

  codeSelf() {
    return get("code/self");
  },

  codeHealth(code: string) {
    return post("code/health", { code: code });
  },

  codeManage(data: CodeManageRequestType) {
    return put("subscribe/change-product", { ...data });
  },
};

export const subscribeAPI = {
  subscribeSelf() {
    return get<SubscribesResponseType>("subscribe/self");
  },

  subscribeChangeProduct(data: ChangeSubscribeRequestType) {
    return post("subscribe/change-product", { ...data });
  },
};

export const userAPI = {
  signIn(data: SignInRequestType) {
    return post<SignInResponseType>("users/sign-in", { ...data });
  },

  signUp(data: SignUpRequestType) {
    return post<SignUpResponseType>("users/sign-up", { ...data });
  },

  updateUser(data: UpdateUserRequestType) {
    return patch<UpdateUserResponseType>("users", { ...data });
  },

  updatePassword(data: UpdatePasswordRequestType) {
    return patch<UpdatePasswordResponseType>("users/update-password", {
      ...data,
    });
  },

  usersMe() {
    return get<UserType>("users/me");
  },
};
