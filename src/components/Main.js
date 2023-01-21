import React from 'react'
import styled from 'styled-components'
// import { Container } from 'tsparticles'
import { NavLink } from "react-router-dom";

import PowerButton from "../subComponents/PowerBotton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// https://stackoverflow.com/questions/44441734/react-js-error-is-not-defined-react-jsx-no-undef


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100%;
height: 100vh;
overflow: hidden;

position: relative;

h2, h3, h4, h5, h6 {
    Font-family: 'Karla', sans-serif;
    font-weight:500;
}
`

const ContainerTwo = styled.div`
    padding: 2rem;
`
 
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
// without the rotation:
// transform: translate(-50%, -50%);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`


const Main = () => {
    return (
       
            <MainContainer>
                <ContainerTwo>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />

                <Contact target="_blank" to={{pathname:"mailto:bruklili15@gmail.com"}}>
                    <h3>
                        Say Hi...
                    </h3>
                </Contact>
                <Blog to="/blog">
                    <h3>
                        Blog
                    </h3>
                </Blog>
                <Work to="/work">
                    <h3>
                        work
                    </h3>
                </Work>
                <buttonBar>
                <Work to="/work">
                    <h3>
                        work
                    </h3>
                </Work>

                <Work to="/work">
                    <h3>
                        work
                    </h3>
                </Work>
                </buttonBar>
                </ContainerTwo>
            </MainContainer>
       
    )
}

export default Main

// https://youtu.be/jcohAIaSy2M?list=PLjxZxD6BDkeZLbkPNgGxZklwPdhIAuYqV&t=3028