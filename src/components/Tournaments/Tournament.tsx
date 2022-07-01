import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { TournamentTileType } from '../../Types/interfaces'
import tournamentTilesDB from '../../fakeDB/tournamentTilesDB.json'
import Button from '../Common/Button'


export default function Tournament() {
    const { id } = useParams()

    const [tournament, setTournament] = useState<TournamentTileType | null>(tournamentTilesDB[2])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSignUp = () => {
        console.log('sign up!')
    }

    return (
        <Container>
            {
                tournament === null ?
                    <p>nothing</p>
                    :
                    <>
                        <div className="image">
                            <img src={tournament.image} alt="" />
                        </div>
                        <div className="tournament-info">
                            <h2>{tournament.name}, id: {id}</h2>
                            <p>Location: {tournament.location}, Poland</p>
                            <p>Pool: {tournament.pool} {tournament.currency}</p>
                            <p>Date: {tournament.date}, {tournament.time}</p>
                            <p>Price: {tournament.price} {tournament.currency}</p>
                            <Button text='sign up!' color='var(--main-gradient)' onclick={handleSignUp} width='200px' />
                        </div>
                        <div className="description">
                            <h3>About tournament / sign up</h3>
                            <p>{tournament.description}</p>
                        </div>
                    </>

            }
        </Container>

    )
}

const Container = styled.section`
    width: 1200px;
    min-height: 400px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: -250px auto 100px auto;
    padding: 50px;
    background-color: #fff;
    box-shadow: var(--shadow);
    color: var(--main-dark);

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;   
    }

    .description {
        grid-column: 1 / -1;
    }

`