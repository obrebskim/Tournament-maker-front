import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../assets/player.png'

export default function Hero() {
    return (
        <Container >
            <img src={HeroImg} alt="player" />
            <h1>Tournament Maker - make your own tournament come true!</h1>
            <p>MAKE IT
                <br />
                <span>YOUR</span> WAY!
            </p>
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
        opacity: 0;
    }

    & p {
        position: absolute;
        top: 30vh;
        left: 30vw;
        font-size: 9rem;
        font-weight: 800;
        font-style: italic;
        line-height: 85%;
        color: #fff;
        text-shadow: var(--shadow);
        
        & span {
            background: linear-gradient(135deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: none;
        }
    }
    & img {
        width: 50vw;
        margin-left: 5vw;

    }
`