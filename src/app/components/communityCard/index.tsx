import React from "react";
import styled, { css } from "styled-components";
import Fonts from "../../../../themes/fonts";
import { Stack } from "react-bootstrap";
import Image from "next/image";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";

const StyledCommunityCard = styled.div`
  height: 753px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${mediaBreakpointDown(
    BREAKPOINTS.md,
    css`
      margin-bottom: 14px;
    `
  )}
`;

const StyledContent = styled.div`
  .access {
    ${Fonts.paragraphBold};
    line-height: 28.8px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondaryBlack};
  }
  .amount {
    ${Fonts.headingthree};
    line-height: 48px;
    padding: 10px 0;
    color: ${({ theme }) => theme.colors.secondaryBlack};
  }

  .duration {
    font-size: 14px;
    line-height: 16.8px;
    padding: 0 0 10px;
    color: ${({ theme }) => theme.colors.secondaryBlack};
  }

  .text {
    font-size: 14px;
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.md,
    css`
      .text {
        font-size: 12px;
      }
    `
  )}
`;

const StyledButton = styled.div<{ btnColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: 43px;
  background: ${({ btnColor }) => btnColor};
`;

interface Props {
  btnColor: string;
  access: string;
  amount: string;
  duration: string;
  contents: Record<string, string>[];
}

const CommunityCard: React.FC<Props> = ({
  access,
  duration,
  contents,
  amount,
  btnColor,
}) => {
  return (
    <StyledCommunityCard>
      <StyledContent>
        <div className="access">{access}</div>
        <div className="amount">{amount}</div>
        <div className="duration">{duration}</div>
        {contents.map((content, index: number) => {
          return (
            <Stack key={index} direction="horizontal" gap={3} className="py-1">
              <Image
                src={"/images/check-icon.svg"}
                alt="icon"
                height={16}
                width={16}
              />
              <div className="text">{content.text}</div>
            </Stack>
          );
        })}
      </StyledContent>

      <StyledButton btnColor={btnColor}>Get started</StyledButton>
    </StyledCommunityCard>
  );
};

export default CommunityCard;
