import { eventsData } from "@/data/eventsData";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styled, { css } from "styled-components";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../../themes/breakpoints";

const StyledEvent = styled.div`
  width: 100%;
  padding: 32px 60px;

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      padding: 10px;
    `
  )}
`;

const Events = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <StyledEvent>
      <Slider {...settings}>
        {eventsData.map((event, index: number) => (
          <Image
            key={index}
            src={event.image}
            alt="icon"
            width={1160}
            height={600}
            layout="responsive"
          />
        ))}
      </Slider>
    </StyledEvent>
  );
};

export default Events;
