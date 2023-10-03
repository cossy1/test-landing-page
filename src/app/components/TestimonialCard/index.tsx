import Image from "next/image";
import React from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";
import Fonts from "../../../../themes/fonts";

const StyledTestimonialCard = styled(Stack)`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 14px;
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    overflow: hidden;
  }

  .text {
    ${Fonts.paragraphNormal};
    line-height: 16.8px;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
  }

  .name {
    ${Fonts.paragraphNormal};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
  }

  .handle {
    ${Fonts.paragraphNormal};
    line-height: 16.8px;
    color: ${({ theme }) => theme.colors.secondaryBlack};
    font-weight: 600;
    font-size: 14px;
  }

  .r {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

interface Props {
  social: string;
  image: string;
  name: string;
  handle: string;
  text: string;
}

const TestimonialCard: React.FC<Props> = ({
  social,
  image,
  name,
  handle,
  text,
}) => {
  return (
    <StyledTestimonialCard gap={2} direction="horizontal">
      <div>
        <Image src={image} alt="icon" height={60} width={60} />
      </div>
      <Stack gap={2}>
        <div className="r">
          <div>
            <Stack>
              <div className="name">{name}</div>
              <div className="handle">{handle}</div>
            </Stack>
          </div>

          <div>
            <Image src={social} alt="icon" height={24} width={24} />
          </div>
        </div>
        <div className="text">{text}</div>
      </Stack>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;
