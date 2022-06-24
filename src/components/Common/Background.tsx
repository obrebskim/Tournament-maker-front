import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../assets/background.jpg'

export default function Background() {
    return (
        <Container style={{ backgroundImage: `url(${BackgroundImg})` }}>Background</Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`