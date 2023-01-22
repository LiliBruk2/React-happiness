import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Facebook, Twitter } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        {/* Black color */}
        <NavLink
          style={{ color: "inherit" }}
          target="__blank"
          to={{ pathname: "https://github.com/LiliBruk2" }}
        >
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        {/* Purple text color */}
        {/* Should be LinkedIn */}
        <NavLink target="__blank" to={{ pathname: "#" }}>
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        {/* Should be behence or some other design community */}
        <NavLink target="__blank" to={{ pathname: "#" }}>
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
