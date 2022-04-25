export interface cardLicense {
  code: string;
  domain: string;
}

export interface pricingCard {
  price: string;
  isSecondType: boolean;
  licenseTerm: string;
  description: string;
  features: string[];
}
