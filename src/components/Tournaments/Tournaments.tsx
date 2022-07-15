import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Button from '../Common/Button'
import { OptionType, TournamentTumbnailType, FilterItemType } from '../../Types/interfaces'
import tournamentTiliesDB from '../../fakeDB/tournamentTilesDB.json'
import TournamentTile from './TournamentTile'
import Filters from './UsedFilters'


function Tournaments() {

    const [countries, setOptions] = useState<OptionType[]>([{ label: 'Germany', value: 'de' }, { label: 'Poland', value: 'pl' }, { label: 'United States', value: 'us' }])
    const [regions, setRegions] = useState<OptionType[]>()
    const [cities, setCities] = useState<OptionType[]>()
    const [tournaments, setTournaments] = useState<TournamentTumbnailType[]>([])
    const [usedFilters, setUsedFilters] = useState<FilterItemType[]>([{ name: 'tournament name', checked: false }, { name: 'country', checked: false }, { name: 'region', checked: false }, { name: 'city', checked: false },])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        console.log('form')
    }

    return (
        <Container>
            <aside>
                <h2>Find tournament</h2>
                <form onSubmit={handleSubmit}>
                    <label className='name' htmlFor='name'>
                        <input type='text' name='name' id='name' />
                        <p>tournament name</p>
                    </label>
                    <label htmlFor='country'>
                        <div className="select">
                            <Select options={countries} name='country' />
                        </div>
                        <p>country</p>
                    </label>
                    <label htmlFor='region'>
                        <div className="select">
                            <Select options={regions} />
                        </div>
                        <p>region</p>
                    </label>
                    <label htmlFor='city'>
                        <div className="select">
                            <Select options={cities} />
                        </div>
                        <p>city</p>
                    </label>

                    <Button type='submit' onclick={(e) => handleSubmit(e)} text="search" color='var(--main-gradient)' />
                </form>
            </aside>
            <main>
                <Filters usedFilters={usedFilters} />
                {
                    tournaments.length < 1 ?
                        <p className="empty">no results</p>
                        :
                        tournaments.map(t => <TournamentTile key={t.id} tournament={t} />)
                }
            </main>
        </Container>

    )
}

export default Tournaments

const Container = styled.section`
    width: 1200px;
    min-height: 400px;
    position: relative;
    display: grid;
    grid-template-columns: 350px auto;
    gap: 20px;
    margin: -250px auto 100px auto;

    & > aside {
        padding: 20px;
        background: #fff;
        box-shadow: var(--shadow);
        color: var(--main-dark);
        max-height: 488px;
    }

    & h2 {
        margin-bottom: 20px;
    }

    & form {
        display: grid;
        gap: 20px;

        & label {
            display: grid;
            p {
                order: 0;
                margin-bottom: 5px;
            }

            & .select {
                order: 1;
            }

            &.name {
                & p {
                    order: 0;
                }
                & input {
                    order: 1;
                    height: 38px;
                    padding-left: 10px;
                    border: 1px solid #d2d2d2;
                    border-radius: 5px;
                }
            }
        }

        & button {
            margin-top: auto;
        }
    }

    & main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`