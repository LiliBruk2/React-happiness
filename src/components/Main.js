import React from 'react'
import styled from 'styled-components'
// import { Container } from 'tsparticles'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vh;
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

const Main = () => {
    return (
       
            <MainContainer>
                <ContainerTwo>
                Main Component/Page
                {/* https://youtu.be/jcohAIaSy2M?list=PLjxZxD6BDkeZLbkPNgGxZklwPdhIAuYqV&t=1468 */}
                </ContainerTwo>
            </MainContainer>
       
    )
}

export default Main