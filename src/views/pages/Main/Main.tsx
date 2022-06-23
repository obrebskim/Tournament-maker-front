import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'

export default function Main() {
    return (
        <Container>
            <Slider />
        </Container>
    )
}

const Container = styled.main`
    height: 1000px;
    width: 1200px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,minmax(250px,1fr));
    grid-auto-rows: 250px;
    gap: 10px;
    margin: -250px auto 0 auto;

    & > section {
        background: #fff;
        box-shadow: var(--shadow);
    }

 `