import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../assets/beach_volley_hero.jpg'

export default function Hero() {
    return (
        <Container style={{ backgroundImage: `url(${HeroImg})` }}>
            <h1>Make your own tournament come true!</h1>
        </Container>
    )
}

const Container = styled.div`
    height: 60vh;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    & h1 {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        text-shadow: 0 0 30px #333;
        font-size: 6rem;
        color: #fff;
        font-weight: bold;
        text-align: center;
    }
`