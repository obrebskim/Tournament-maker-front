import React from 'react'
import styled from 'styled-components'

interface Props {
    text: string,
    color: string,
    type?: "button" | "submit" | "reset" | undefined,
}

export default function Button({ text, color, type = undefined }: Props) {

    return (
        <Container color={color} type={type}>{text}</Container>
    )
}

const Container = styled.button`
    background: ${props => props.color}
`