import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Styles {
    gridColumn: string,
}

interface Props {
    text: string,
    to: string,
    styles?: Styles,
}



export default function RedirectBtn({ text, to, styles }: Props) {
    return (
        <Container style={styles}>
            <Link to={to}>{text}</Link>
        </Container>
    )
}

const Container = styled.button`
    background: var(--main-gradient);
    border: none;
    font-family:'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;

    & a {
        text-decoration: none;
        color: var(--main-dark);
    }
`