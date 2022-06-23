import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import NewsPost from './NewsPost'
import TournamentTile from './TournamentTile'

export default function Main() {
    return (
        <Container>
            <div className='placeholder'></div>
            <Slider />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <TournamentTile />
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
    margin: -350px auto 0 auto;

    & > section, & > article {
        background: #fff;
        box-shadow: var(--shadow);
    }

    & .placeholder {
        grid-column: 1/4;
        grid-row: 1/2;
    }

 `