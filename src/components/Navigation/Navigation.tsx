import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation() {
    return (
        <Container>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/tournaments'>Tournaments</NavLink></li>
            </ul>

        </Container>
    )
}

const Container = styled.nav`
    
`