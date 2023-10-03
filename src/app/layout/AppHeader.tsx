import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";
import AppButton from "../components/AppButton";

const StyledNavbar = styled(Navbar)`
  padding: 32px 40px;
  z-index: 2;

  .action-buttons {
    gap: 10px;
    display: flex;
  }

  .btns, .texts {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .join-us {
    padding: 14px 32px;
  }
`;

const AppHeader: React.FC = () => {
  const { push } = useRouter();
  return (
     <StyledNavbar collapseOnSelect expand="lg" variant="light">
      <Container >
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              src="/images/app-logo.svg"
              alt="App Logo"
              width={189.43}
              height={30}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto texts">
            <Nav.Link onClick={() => push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => push("/")}>About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto btns">
            <div className="action-buttons">
              <AppButton text="Login" filled={false} />
              <AppButton text="Join Us" className="join-us" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default AppHeader;
