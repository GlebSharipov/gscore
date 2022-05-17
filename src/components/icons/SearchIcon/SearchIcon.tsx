import * as React from "react";
import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.889 19.417a8.889 8.889 0 1 0 0-17.778 8.889 8.889 0 0 0 0 17.778ZM22 21.64l-4.834-4.834"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
