import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import Fonts from "../../../themes/fonts";
import Image from "next/image";
import { BREAKPOINTS, mediaBreakpointDown } from "../../../themes/breakpoints";

const StyledFooter = styled.div`
  padding: 60px;

  .header {
    ${Fonts.headingOne};
    font-size: 16px;
    line-height: 19.2px;
  }

  div {
    ${Fonts.paragraphSmall};
    line-height: 19.2px;
    cursor: pointer;
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      padding: 60px 10px;

      .header {
        font-size: 14px;
      }

      div {
        font-size: 12px;
      }
    `
  )}
`;

const StyledBottom = styled.div`
  background: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  ${Fonts.paragraphSmall};
  color: ${({ theme }) => theme.colors.black};
  padding: 20px 0;
`;

export default function AppFooter() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row>
            <Col md={6} xs={12} className="mb-5">
              <Stack gap={4} direction="horizontal">
                <Stack gap={4}>
                  <div className="header">COMPANY</div>
                  <div>About Us</div>
                  <div>Careers</div>
                  <div>News</div>
                  <div>Contact</div>
                </Stack>
                <Stack gap={4}>
                  <div className="header">RESOURCES</div>
                  <div>Event</div>
                  <div>Blog</div>
                  <div>Newsletter</div>
                </Stack>
                <Stack gap={4}>
                  <div className="header">POLICIES</div>
                  <div>Terms</div>
                  <div>Privacy</div>
                  <div>Condition</div>
                  <div>Guidelines</div>
                  <div>License</div>
                </Stack>
              </Stack>
            </Col>

            <Col md={6} xs={12}>
              <Stack gap={4}>
                <Image
                  src="/images/app-logo.svg"
                  alt="icon"
                  width={189.43}
                  height={30}
                />
                <div>
                  Club Connect helps me grow my business. I have been connected
                  to the right network and at the same time I have been rewarded
                  with training and mentoring. I highly recommend this to all.
                </div>
                <Stack direction="horizontal" gap={2}>
                  <Image
                    src="/images/instagram.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/images/facebook.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/images/twitter.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
      <StyledBottom>MADE WITH ❤️ BY OLAIFA PROMISE</StyledBottom>
    </>
  );
}
