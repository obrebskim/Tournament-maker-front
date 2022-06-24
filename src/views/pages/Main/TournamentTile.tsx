import React from 'react'
import styled from 'styled-components'
import { TournamentTileType } from '../../../Types/interfaces'

interface Props {
    tournament: TournamentTileType,
}

export default function TournamentTile({ tournament }: Props) {

    return (
        <Container>TournamentTile</Container>
    )
}

const Container = styled.article`
    grid-column: 1 / span 3;
    background: white;
`