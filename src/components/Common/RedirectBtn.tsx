import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    text: string,
    to: string,
}

export default function RedirectBtn({ text, to }: Props) {
    return (
        <Container>
            <Link to={to}>{text}</Link>
        </Container>
    )
}

const Container = styled.button`
    
`