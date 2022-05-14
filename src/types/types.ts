export interface cardLicense {
  code: string;
  domain: string;
}

export interface pricingCard {
  price: string;
  isSecondType: boolean;
  offset?: boolean;
  licenseTerm: string;
  description: string;
  features: string[];
}

export type BuySubscribeResponseType = {
  subscribe: {
    userId: number;
    productId: number;
    currentPeriodStart: number;
    currentPeriodEnd: number;
    status: string;
    id: number;
  };
};

export type PriceType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};

export type ProductType = {
  id: number;
  sitesCount: number;
  name: string;
  prices: PriceType[];
};

export type UserType = {
  id: number;
  email: string;
  username: string;
};

export type SignInRequestType = {
  email: string;
  password: string;
};

export type SignInResponseType = {
  token: string;
  user: UserType;
};

export type SignUpRequestType = {
  email: string;
  username: string;
  password: string;
};

export type SignUpResponseType = {
  email: string;
  username: string;
  token: string;
};

export type UpdateUserRequestType = {
  email: string;
  username: string;
};

export type UpdateUserResponseType = {
  id: number;
  email: string;
  username: string;
};

export type UpdatePasswordRequestType = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePasswordResponseType = {
  id: number;
  email: string;
  username: string;
};

export type CodeType = {
  id: number;
  code: string;
  origin: string;
  status: string;
  subscribeId: number;
  userId: number;
};

export type CodeManageRequestType = {
  codesIds: number[];
  subscribeId: number;
};

export type SubscribesResponseType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  product: ProductType;
  codes: CodeType[];
};

export type ChangeSubscribeRequestType = {
  productId: number | undefined;
  subscribeId: number | undefined;
};
