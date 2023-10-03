import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../../themes/fonts";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../../themes/breakpoints";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { faqData } from "@/data/faqData";

const StyledFaq = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      padding: 10px;
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
    max-width: 386px;
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
        font-size: 28px;
        line-height: 30px;
      }
      div:nth-child(2) {
        font-size: 14px;
        line-height: 28.8px;
      }
    `
  )}
`;

const Faq = () => {
  return (
    <StyledFaq>
      <StyledTop>
        <div>Frequently Asked Questions</div>
        <div>You will find answers to the questions we get asked the most</div>
      </StyledTop>

      <Row className="justify-content-center mt-5">
        <Col xs={12} md={7}>
          <Accordion>
            <Accordion defaultActiveKey="0" flush>
              {faqData.map((faq) => {
                const { id, question, answer } = faq;
                return (
                  <Accordion.Item eventKey={id} key={id}>
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>{answer}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Accordion>
        </Col>
      </Row>
    </StyledFaq>
  );
};

export default Faq;
