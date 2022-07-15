import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    text: string,
    to: string,
    gridColumn?: string,
    height?: string,
    width?: string,
}

export default function RedirectBtn({ text, to, height = '36px', width = 'auto', gridColumn = 'auto' }: Props) {
    return (
        <Container style={{ height, gridColumn, width }}>
            <Link to={to}>{text}</Link>
        </Container>
    )
}

const Container = styled.button`
    position: relative;
    background: var(--main-gradient);
    border: none;
    font-family:'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        &::before {
            transform: translateY(0);
        }

        & a {
            color: white;
        }

    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        background: var(--secondary-gradient);
        transition: all .2s;
    }

    & a {
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        place-items: center;
        text-decoration: none;
        color: var(--main-dark);
        transition: color .2s;
    }
`