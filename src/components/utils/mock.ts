import { cardLicense, pricingCard } from "src/types";

export const userData = {
  user: "Alex",
};

export const cardsLicenseData: cardLicense[] = [
  {
    code: "sl=ru&tl=en&texte=%D0DD...",
    domain:
      "https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0ADD.as;das;dka;lsdkl;askdl;asdlkasdl;s..",
  },
  {
    code: "sl=ru&tl=en&texte=%D0ASDS...",
    domain:
      "https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0SDA...",
  },
  {
    code: "sl=ru&tl=en&texte=%D0AA...",
    domain: "",
  },
];

export const pricingCardsData: pricingCard[] = [
  {
    price: "77",
    isSecondType: false,
    licenseTerm: "Single site license",
    description:
      "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
    features: [
      "Single site license",
      "Special introductory pricings",
      "Unlimited Pages and Keywords",
      "Billed annually",
    ],
  },
  {
    price: "117",
    isSecondType: true,
    licenseTerm: "3 Site license",
    description:
      "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
    features: [
      "All features for 3 sites",
      "Special introductory pricing",
      "Unlimited Pages and Keywords",
      "Billed annually",
    ],
  },
  {
    price: "167",
    isSecondType: false,
    licenseTerm: "10 Site license",
    description:
      "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
    features: [
      "All features for 10 sites",
      "Special introductory pricing",
      "Unlimited Pages and Keywords",
      "Billed annually",
    ],
  },
];
