import React from 'react'
import styled from 'styled-components'

interface Props {
    text: string,
    color: string,
    type?: "button" | "submit" | "reset" | undefined,
    onclick: (param: any) => void,
}

export default function Button({ text, color, type = undefined, onclick = () => { } }: Props) {

    return (
        <Container color={color} type={type} onClick={onclick}>
            <p>{text}</p>
        </Container>
    )
}

const Container = styled.button`
    min-height: 36px;
    position: relative;
    background: ${props => props.color};
    border: none;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        &::before {
            transform: translateY(0);
        }

        & p {
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

    & p {
        position: relative;
        transition: color .2s;
    }
`