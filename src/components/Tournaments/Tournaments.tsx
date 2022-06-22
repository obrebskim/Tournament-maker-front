import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Common/Button'
import RedirectBtn from '../Common/RedirectBtn'

function Tournaments() {

    return (
        <Container>
            <h1>List of active tuornaments</h1>
            <ul>
                <li>tour #1</li>
                <li>tour #2</li>
                <li>tour #3</li>
            </ul>
            <RedirectBtn to='/tournaments/create' text='utwórz nowy turniej' />
        </Container>

    )
}

export default Tournaments

const Container = styled.section`

`