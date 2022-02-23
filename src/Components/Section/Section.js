import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade down duration={2000}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Fade down duration={2000}>
            <ButtonSection>
                <ButtonsGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && <RightButton>
                        {rightBtnText}
                    </RightButton>}
                </ButtonsGroup>
                <DownArrow src='\down-arrow.svg'/>
            </ButtonSection>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-image:${props=>`url('${props.bgImg}')`};
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const ItemText =styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonsGroup = styled.div`
    display:flex;
    margin-bottom:10px;
    
    @media(max-width:768px){
        flex-direction:column;
    }
`
const LeftButton =styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    margin-right:10px;
    opacity:0.85;
    text-transform:uppercase;
    cursor:pointer;
    font-size: 12px;
    @media(max-width:768px){
        margin-bottom:10px;
    }
    `
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`
    margin-top:10px;
    height:40px;
    animation:animateDown infinite 1.5s;
`
const ButtonSection=styled.div``