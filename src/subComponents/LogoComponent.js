import React from "react";
import styled from "styled-components";
import {  DarkTheme } from "../components/Theme";


const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  // Font style
  // font-family: ;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
     <Logo color={props.theme}>LB
     </Logo>
  );
    };

export default LogoComponent;
