import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Colors from "../../../../themes/colors";

const StyledButton = styled(Button)<Props>`
  background: ${({ filled }) => (filled ? Colors.primaryGreen : "transparent")};
  border: 1px solid ${Colors.primaryGreen};
  color: ${({ filled }) => (filled ? Colors.white : Colors.secondaryBlack)};
  border-radius: 8px;
  text-transform: capitalize;
  padding: 14px 16px;

  :hover,
  :active,
  :focus {
    background: ${Colors.primaryGreen};
    border: 1px solid ${Colors.primaryGreen};
  }
`;

interface Props {
  text: string | ReactNode;
  filled?: boolean;
  className?: string;
}

const AppButton: React.FC<Props> = ({ text, filled = true, className }) => {
  return (
    <StyledButton filled={filled} className={className}>
      {text}
    </StyledButton>
  );
};

export default AppButton;
