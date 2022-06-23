import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../assets/beach_volley_hero.jpg'

export default function Hero() {
    return (
        <Container style={{ backgroundImage: `url(${HeroImg})` }}>

        </Container>
    )
}

const Container = styled.div`
    height: 60vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`