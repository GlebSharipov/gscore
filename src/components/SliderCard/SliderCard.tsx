import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import Slider from "react-slick";
import styled from "styled-components";
import { SliderArrows } from "../../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon, ArrowLeftIcon } from "icons";

interface SliderCardProps {
  children?: React.ReactNode;
}

export const SliderCard: FC<SliderCardProps> = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Root>
      <SliderContainer>
        <Slider {...settings}>{children}</Slider>
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
  height: 450px;
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.Color_500};
  border-radius: 12px;
  width: 44px;
  height: 44px;
`;

const Container = styled.div`
  border: 1px solid red;
  height: 40px;
`;
