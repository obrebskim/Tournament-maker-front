import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export default function Tournament() {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Container>
            <h2>Welcome to the tournament {id} page</h2>
        </Container>

    )
}

const Container = styled.section`
    width: 1200px;
    min-height: 400px;
    position: relative;
    margin: -250px auto 100px auto;
    padding: 50px;
    background-color: #fff;
    box-shadow: var(--shadow);
    color: var(--main-dark);
`