import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../themes/fonts";
import { Col, Form, Row } from "react-bootstrap";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";
import TestimonialCard from "../TestimonialCard";
import { testimonialData } from "@/data/testimonialData";

const StyledTestimonial = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
`;

const StyledTop = styled.div`
  flex-direction: column;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: ${({ theme }) => theme.colors.black};
    ${Fonts.headingtwo};
    line-height: 57.6px;
    max-width: 334px;
    text-align: center;
  }

  div:nth-child(2) {
    color: ${({ theme }) => theme.colors.dark};
    ${Fonts.paragraphNormal};
    line-height: 24px;
    max-width: 530px;
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      div {
        font-size: 32px;
        line-height: 30px;
      }
      div:nth-child(2) {
        font-size: 16px;
        line-height: 28.8px;
      }
    `
  )}
`;

const Testimonial = () => {
  return (
    <StyledTestimonial>
      <StyledTop>
        <div>What People say About Us</div>
        <div>
          Find out the impact by joining this community and what others have had
          to say about their experiences with us.
        </div>
      </StyledTop>

      <Row className="mt-5">
        {testimonialData.map((testimonial) => {
          const { id, text, image, social, name, handle } = testimonial;

          return (
            <Col key={id}  lg={4} xs={12}>
              <TestimonialCard
                text={text}
                image={image}
                social={social}
                handle={handle}
                name={name}
              />
            </Col>
          );
        })}
      </Row>
    </StyledTestimonial>
  );
};

export default Testimonial;
