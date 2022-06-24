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
            <TournamentTile />
            <TournamentTile />
            <TournamentTile />
            <TournamentTile />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
        </Container>
    )
}

const Container = styled.main`
    width: 1200px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,minmax(250px,1fr));
    grid-auto-flow: column;
    grid-auto-rows: 250px;
    gap: 10px;
    margin: -250px auto 100px auto;

    & > section, & > article {
        background: #fff;
        box-shadow: var(--shadow);
    }

    & .placeholder {
        grid-column: 1/4;
        grid-row: 1/2;
    }

 `