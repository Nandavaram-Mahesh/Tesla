import React from 'react'
import styled from "styled-components"
import Section from '../Section/Section'


function HomePage() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order online for touchless delivery"
            backgroundImg="\model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            /> 
            <Section
                        title="Model X"
                        description="Order online for touchless delivery"
                        backgroundImg="\model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
            /> 
            <Section 
            title="Model Y"
            description="Order online for touchless delivery"
            backgroundImg="\model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"/> 
            <Section
                        title="Model 3"
                        description="Order online for touchless delivery"
                        backgroundImg="\model-3.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"/> 
            <Section
                        title="Model X"
                        description="Order online for touchless delivery"
                        backgroundImg="\model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"/> 
            <Section
                        title="Lowest Cost Solar Panels In America"
                        description="Money-back guarantee"
                        backgroundImg="/solar-panel.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn More"/>
            <Section
                        title="Solar For New Roofs"
                        description="Solar Roof Costs Less Than A New Roof"
                        backgroundImg="/solar-roof.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn More"/>           
            <Section
                        title="Accessories"
                        description=""
                        backgroundImg="/accessories.jpg"
                        leftBtnText="Shop Now"
                        />            
        </Container>
    )
}

export default HomePage

const Container = styled.div`
    height:100vh;
    z-index:1;

`