import { transform } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Me from '../assets/Images/profile-img.png'

const Box = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
width: 55vw;
height: 24%;
border-radius: 1.3%;
display: flex;

// below gradient is to create 2 colored borders

background-repeat: no-repeat;
background-size: 100% 2px;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    

border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};

z-index: 1;
);
`

const SubBox = styled.div`
width:50%;
position:relative;
display: flex;



.Me_pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width:100%;
    height: auto;
}
`

const Text = styled.div``


const Intro = () => {
    return (
        <Box>
            <SubBox>
                {/* changed from TEXT tag - Text to div */}
            <Text>
                <h2>Hi,</h2> <br></br><br></br>
                <h3>I'm Lili B, welcome!</h3><br></br><br></br>
                <h6>I design and Code simple yet beautiful websites.</h6>

            </Text>
       
        </SubBox>

        <SubBox>
            <div>
                <img className="Me_pic" src={Me} alt="profile pic" />
            </div>
        </SubBox>
        </Box>
    )
}

export default Intro