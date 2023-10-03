import Image from "next/image";
import React from "react";
import { Stack } from "react-bootstrap";
import styled, { css } from "styled-components";
import {
  BREAKPOINTS,
  mediaBreakpointDown,
} from "../../../../themes/breakpoints";

const StyledAdvertCard = styled.div<{ large: boolean; color: string }>`
  display: flex;
  background: ${({ color }) => color};
  border-radius: 9.67px;
  gap: ${({ large }) => (large ? "32px" : "24px")};
  padding: ${({ large }) =>
    large ? "60px 86.8px 30px 86.8px" : "50px 50px 30px 25px"};
  height: ${({ large }) => (large ? "auto" : "234px")};
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-direction: ${({ large }) => (large ? "column-reverse" : "row")};

  div:nth-child(2) {
    .title {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 30px;
      font-weight: 600px;
    }

    div {
      color: ${({ theme }) => theme.colors.textColor};
      font-size: 15px;
      font-weight: 400px;
    }
  }

  ${mediaBreakpointDown(
    BREAKPOINTS.sm,
    css`
      padding: "28.69px 28.69px 28.69px 14.35px";
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      div:nth-child(2) {
        .title {
          font-size: 16px;
        }

        div {
          font-size: 10px;
        }
      }
    `
  )}
`;

interface Props {
  color: string;
  content: string;
  title: string;
  src: string;
  className?: string;
  large?: boolean;
}

const AdvertCard: React.FC<Props> = ({
  color,
  content,
  src,
  title,
  className,
  large = false,
}) => {
  return (
    <StyledAdvertCard color={color} large={large} className={className}>
      <div>
        <Image src={src} alt="icon" width={80} height={80} />
      </div>

      <div>
        <Stack gap={3}>
          <div className="title">{title}</div>
          <div>{content}</div>
        </Stack>
      </div>
    </StyledAdvertCard>
  );
};

export default AdvertCard;
