import React from 'react'
import styled from 'styled-components'

export default function Filters() {
    return (
        <Container>
            Filters: no filters
        </Container>
    )
}

const Container = styled.div`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: #fff;
    color: var(--main-dark);
`