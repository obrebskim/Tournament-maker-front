import React from 'react'
import styled from 'styled-components'
import Button from '../Common/Button'

function Tournaments() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        console.log('form')
    }

    return (
        <Container>
            <aside>
                <h2>Find tournament</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <input type='text' name='name' id='name' />
                        <p>tournament name</p>
                    </label>
                    <label htmlFor='location'>
                        <input type='text' name='location' id='name' />
                        <p>tournament location</p>
                    </label>
                    <Button type='submit' text="search" color='var(--main-gradient)' />
                </form>
            </aside>
            <main>
                lista turniejów
            </main>
        </Container>

    )
}

export default Tournaments

const Container = styled.section`
    width: 1200px;
    min-height: 400px;
    display: grid;
    grid-template-columns: 350px auto;
    gap: 20px;
    position: relative;
    margin: -250px auto 100px auto;

    & > aside, & > main {
        background: #fff;
        box-shadow: var(--shadow);
        color: var(--main-dark);
    }
`