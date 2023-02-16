import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: system-ui;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>LB</Logo>;
};

export default LogoComponent;
