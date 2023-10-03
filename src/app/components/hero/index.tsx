import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../themes/fonts";
import Image from "next/image";
import AppButton from "../AppButton";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";
import useWindowSize from "@/hooks/useWindowSize";

const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 40px;
  gap: 32px;
  margin: 0;

  ${mediaBreakpointDown(
    BREAKPOINTS.lg,
    css`
      flex-direction: column;
    `
  )}
`;

const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;

  .title {
    ${Fonts.headingOne};
    max-width: 423px;
    line-height: 69.76px;
  }

  .sub-title {
    ${Fonts.paragraphNormal};
    color: ${({ theme }) => theme.colors.dark};
    max-width: 570px;
    line-height: 28.8px;
  }

  .join-us {
    padding: 14px 32px;
    height: 46px;
    display: flex;
    align-items: center;
  }

  .users-div {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .users {
      width: 95px;
      ${Fonts.paragraphSmall};
      text-justify: right;
      line-height: 19.2px;
    }
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.lg,
    css`
      .title {
        font-size: 38px;
        line-height: 41.42px;
      }

      .sub-title {
        font-size: 14px;
      }

      .users-div {
        .users {
          font-size: 9px;
        }
      }
    `
  )}
`;

const Hero: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 767;
  return (
    <StyledHero>
      <StyledLeftSide>
        <div className="title">Boost Your Business Achievement</div>
        <div className="sub-title">
          Connect and Engage with Communities of Fellow Entrepreneurs and
          Problem-Solvers
        </div>
        <div>
          <AppButton text="Join Us" className="join-us" />
        </div>
        <div className="users-div">
          <Image src="/images/users.svg" width={60} height={24} alt="users" />
          <Image src="/images/green-dot.svg" width={8} height={8} alt="dot" />
          <div className="users">5+m world active users </div>
        </div>
      </StyledLeftSide>

      <div>
        <Image
          priority
          src="/images/group.svg"
          alt="group-img"
          width={617}
          height={424}
          layout={isMobile ? "responsive" : ""}
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
