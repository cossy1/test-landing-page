import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../themes/fonts";
import { Col, Form, Row } from "react-bootstrap";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";
import CommunityCard from "../communityCard";
import { communityPackage } from "../../../data/communityPackage";

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
  flex-direction: column;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: ${({ theme }) => theme.colors.black};
    ${Fonts.headingtwo};
    line-height: 57.6px;
    max-width: 344px;
    text-align: center;
  }

  div:nth-child(2) {
    color: ${({ theme }) => theme.colors.dark};
    ${Fonts.paragraphNormal};
    line-height: 24px;
  }

  .stack {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-family: "Inter", "san-serif";
    min-width: 100%;

    div {
      font-size: 16px;
      line-height: 19.2px;
      color: ${({ theme }) => theme.colors.primaryGreen};
    }
  }

  .form-check-input:checked,
  .form-check-input:checked {
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    border-color: transparent;
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

const Community = () => {
  return (
    <StyledAdvert>
      <StyledTop>
        <div>Ready to Join our Community?</div>
        <div>Choose the package that suit you</div>
        <div className="stack">
          <div>Bill Monthly</div>
          <Form.Check type="switch" id="red-switch" />
          <div>Annual Anniversary pricing (save 50%)</div>
        </div>
      </StyledTop>

      <Row className="mt-5">
        {communityPackage.map((community) => {
          const { contents, id, access, amount, duration, btnColor } =
            community;
          return (
            <Col key={id} lg={4} xs={12}>
              <CommunityCard
                contents={contents}
                btnColor={btnColor}
                access={access}
                amount={amount}
                duration={duration}
              />
            </Col>
          );
        })}
      </Row>
    </StyledAdvert>
  );
};

export default Community;
