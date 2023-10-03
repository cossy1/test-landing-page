import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../themes/fonts";
import AdvertCard from "../AdvertCard";
import { adverts } from "@/data/advert";
import { Col, Row } from "react-bootstrap";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";

const StyledAdvert = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;

  .large {
    align-items: flex-end;

    img {
      width: 240px;
      height: 240px;
    }
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      padding: 32px 10px;

      .large {
        img {
          width: 120px;
          height: 120px;
        }

        flex-direction: column-reverse;
        padding: 25.09px;
      }
    `
  )}
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  div {
    color: ${({ theme }) => theme.colors.orange};
    ${Fonts.paragraphSmall};
    font-weight: 500;
    line-height: 19.2px;
  }

  div:nth-child(2) {
    color: ${({ theme }) => theme.colors.secondaryBlack};
    ${Fonts.headingtwo};
    font-weight: 500;
    line-height: 57.6px;
  }

  div:nth-child(3) {
    line-height: 24px;
    text-align: center;
    max-width: 490px;
    color: ${({ theme }) => theme.colors.dark};

  }

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      div {
        font-size: 8px;
        line-height: 9.6px;
      }
      div:nth-child(2) {
        font-size: 24px;
        line-height: 28.8px;
      }
      div:nth-child(3) {
        font-size: 10px;
        line-height: 12px;
      }
    `
  )}
`;

const Advert = () => {
  const largeAdvert = adverts[4];

  return (
    <StyledAdvert>
      <StyledTop>
        <div>Why to Join Us</div>
        <div>Join the growing community.</div>
        <div>
          Ensure You Maximize Your Return on Investment by Joining Club Connect
          Community
        </div>
      </StyledTop>

      <Row className="mt-5">
        {adverts.slice(0, 4).map((advert) => {
          const { content, id, title, image, color } = advert;
          return (
            <Col key={id} md={6} xs={12}>
              <AdvertCard
                src={image}
                content={content}
                title={title}
                color={color}
              />
            </Col>
          );
        })}
      </Row>

      <AdvertCard
        src={largeAdvert.image}
        content={largeAdvert.content}
        title={largeAdvert.title}
        color={largeAdvert.color}
        large
        className="large"
      />
    </StyledAdvert>
  );
};

export default Advert;
