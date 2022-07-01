import React from 'react'
import styled from 'styled-components'
import RedirectBtn from '../Common/RedirectBtn'
import { TournamentTileType } from '../../Types/interfaces'

interface Props {
    tournament: TournamentTileType,
}

export default function TournamentTile({ tournament }: Props) {

    return (
        <Container >
            <div className="tumbnail">
                <img src={tournament.image} alt="court" />
            </div>
            <div className="info">
                <h3 className='name'>{tournament.name}</h3>
                <p className='location'>location: <span>{tournament.location}</span></p>
                <p className="date">date: <span>{tournament.date},</span><span>{tournament.time}</span></p>
                <p className="pool">pool: <span className='important'>{tournament.pool}</span><span className='important'>{tournament.currency}</span></p>
                <p className="description">{tournament.description}</p>
                <RedirectBtn text='read more' to='/tournaments' gridColumn='-1 / -2' />
            </div>
        </Container >
    )
}

const Container = styled.article`
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: .3fr .7fr;
    gap: 20px;
    box-shadow: var(--shadow);
    background: white;
    font-size: 1.2rem;
    color: var(--main-dark);

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & .info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: .3fr .3fr 1fr .3fr;
        gap: 10px;
        padding: 20px 40px 20px 20px;


        & .name {
            font-size: 1.8rem;
            grid-column: 1 / -1;
        }

        & .description {
            grid-column: 1 / -1;
        }

        & span {
            padding: 5px;
            font-weight: 600;

            &.important {
                background: linear-gradient(135deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
`