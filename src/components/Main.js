import React, { Children, useState } from "react";
import styled, { keyframes } from "styled-components";
// import { Container } from 'tsparticles'
import { NavLink } from "react-router-dom";
// import  { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerBotton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
// https://stackoverflow.com/questions/44441734/react-js-error-is-not-defined-react-jsx-no-undef

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const ContainerTwo = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  // without the rotation:
  // transform: translate(-50%, -50%);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  //   left: 2rem;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const buttonBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%

display:flex;
justify-content: space-evenly;
`;

// Center image - YinTang for now :

const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => props.click ? "85%" : "50%"};
  left: ${(props) => props.click ? "92%" : "50%"};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  // rotate
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${props => onclick ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: 100%;
height: 100%;
z-index: 1;
`

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  // position: absolute;
  // top: 50%;
  // left: 2rem;
  // transform: translate(-50%, -50%) rotate(-90deg) ;
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  // position: absolute;
  // top: 50%;
  // left: 2rem;
  // transform: translate(-50%, -50%) rotate(-90deg) ;
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <ContainerTwo>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
        <DarkDiv click={click}/>
        <Center click={click}>
          {/* width & hieght used to be 200  like this : height={200}*/}
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:bruklili15@gmail.com" }}
        >
          <h2>Say Hi...</h2>
        </Contact>
        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work to="/work">
          <h2>work</h2>
        </Work>
        <buttonBar>
          <About to="/about">
            <h2>About.</h2>
          </About>

          <Skills to="/Skills">
            <h2>My Skills</h2>
          </Skills>
        </buttonBar>
      </ContainerTwo>
    </MainContainer>
  );
};

export default Main;

https://youtu.be/jcohAIaSy2M?list=PLjxZxD6BDkeZLbkPNgGxZklwPdhIAuYqV&t=3613