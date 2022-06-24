import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import NewsPost from './NewsPost'
import TournamentTile from './TournamentTile'
import newsTumbnailsDB from '../../../fakeDB/newsTumbnails.json'
import { newsTumbnailType } from '../../../Types/interfaces'

export default function Main() {

    const [newsTumbnails, setNewsTumbnails] = useState<newsTumbnailType[]>(newsTumbnailsDB)

    return (
        <Container>
            <div className='placeholder'></div>
            <Slider />
            <TournamentTile />
            <TournamentTile />
            {
                newsTumbnails.map(i => <NewsPost post={i} />)
            }
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
        box-shadow: var(--shadow);
    }

    & .placeholder {
        grid-column: 1/4;
        grid-row: 1/2;
    }

 `