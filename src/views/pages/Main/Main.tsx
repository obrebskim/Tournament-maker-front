import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import NewsPost from '../../../components/News/NewsPost'
import TournamentTile from '../../../components/Tournaments/TournamentTile'
import newsTumbnailsDB from '../../../fakeDB/newsTumbnails.json'
import { newsTumbnailType, TournamentTumbnailType } from '../../../Types/interfaces'


export default function Main() {

    const [news, setNews] = useState<newsTumbnailType[]>(newsTumbnailsDB)
    const [tournaments, setTournaments] = useState<TournamentTumbnailType[]>([])

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch('http://localhost:3001/tournament/tumbnails')
                const data = await resp.json()
                console.log(data)
                setTournaments(data)
            } catch (err) {
                console.error("Something went wrong with tumbnails fetching!")
            }
        })()
    }, [])

    return (
        <Container>
            <div className='placeholder'></div>
            <Slider />
            {
                tournaments.map(t => <TournamentTile key={t.id} tournament={t} />)
            }
            {
                news.map(i => <NewsPost key={i.id} post={i} />)
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