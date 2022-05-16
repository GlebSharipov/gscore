import React, { FC, useState } from "react";
import { COLORS } from "src/constant";
import Slider from "react-slick";
import styled from "styled-components";
import { SliderButton } from "../../components/UI";
import { ArrowRightIcon, ArrowLeftIcon } from "icons";

interface SliderCardProps {
  children?: React.ReactNode;
  numberOfСards?: number;
}

export const SliderCard: FC<SliderCardProps> = ({
  children,
  numberOfСards,
}) => {
  const [counter, setCounter] = useState(1);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    afterChange: (current: number) => setCounter(current + 1),

    nextArrow: (
      <SliderButton isNextButton>
        <ArrowRightIcon />
      </SliderButton>
    ),
    prevArrow: (
      <SliderButton>
        <ArrowLeftIcon />
      </SliderButton>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <Root>
      <SliderContainer>
        <Slider {...settings}>{children}</Slider>
        <Counter>
          <CardNumber>{counter}</CardNumber>/{numberOfСards}
        </Counter>
      </SliderContainer>
    </Root>
  );
};

const Root = styled.div`
  padding-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.Color_700};
  background-color: ${COLORS.Color_800};
`;

const SliderContainer = styled.div`
  width: 100%;
  min-height: 450px;
`;

const Counter = styled.div`
  display: flex;
  margin-left: 55px;
  margin-top: 35px;
  max-width: 100px;
  color: ${COLORS.Color_700};
  font-size: 22px;

  @media (max-width: 480px) {
    margin-left: 45%;
  }
`;

const CardNumber = styled.div`
  color: ${COLORS.Color_100};
`;
