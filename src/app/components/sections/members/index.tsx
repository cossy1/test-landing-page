import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../../themes/fonts";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { members } from "@/data/members";
import Image from "next/image";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../../themes/breakpoints";

const StyledMembers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    ${Fonts.paragraphNormal};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.dark};
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.md,
    css`
      .top {
        font-size: 10px;
        text-align: center;
        padding: 0 10px;
        line-height: 12px;
      }
    `
  )}
`;

const Members: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyledMembers className="my-5">
      <div className="top">
        Join thousands of businesses worldwide who are already members of
        ClubConnect.
      </div>
      <Container fluid className="mt-3">
        <Slider {...settings}>
          {members.map((member, index: number) => (
            <Image
              key={index}
              src={member.image}
              alt="icon"
              width={96.14}
              height={48}
            />
          ))}
        </Slider>
      </Container>
    </StyledMembers>
  );
};

export default Members;
