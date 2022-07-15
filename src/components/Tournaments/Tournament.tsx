import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { TournamentType } from '../../Types/interfaces'
import Button from '../Common/Button'


export default function Tournament() {
    const { id } = useParams()

    const [tournament, setTournament] = useState<TournamentType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0);
        (async () => {
            const response = await fetch(`http://localhost:3001/tournament/${id}`)
            const data = await response.json()
            setTournament(data)
            setLoading(false)
        })()
    }, [id])

    const handleSignUp = () => {
        console.log('sign up!')
    }

    return (
        <Container>
            {
                loading ?
                    <p>Loading...</p>
                    :
                    tournament === null ?
                        <p>Ups! This tournament does not exist!</p>
                        :
                        <>
                            <div className="image">
                                <img src={tournament.image ? tournament.image : "https://thumbs.dreamstime.com/b/volleyball-court-beach-24829462.jpg"} alt="" />
                            </div>
                            <div className="tournament-info">
                                <h2>{tournament.name}, id: {id}</h2>
                                <p>Location: {tournament.city}, {tournament.country}</p>
                                <p>Address: {tournament.address}</p>
                                <p>Date: {tournament.date}, {tournament.time}</p>
                                <p>Price: {tournament.price} {tournament.currency}</p>
                                <p>Pool: {tournament.pool} {tournament.currency}</p>
                                {
                                    tournament.url &&
                                    <p>Event website: <a href={tournament.url}>{tournament.name}</a></p>
                                }
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