import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { OptionType } from '../../Types/interfaces'
import Button from '../Common/Button'

export default function CreateTournamentForm() {

    const [countries, setOptions] = useState<OptionType[]>([{ label: 'Germany', value: 'de' }, { label: 'Poland', value: 'pl' }, { label: 'United States', value: 'us' }])
    const [regions, setRegions] = useState<OptionType[]>()
    const [cities, setCities] = useState<OptionType[]>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        console.log('create')
    }

    return (
        <Container>
            <h2>Create your own tournament!</h2>
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
                <label htmlFor='city'>
                    <div className="select">
                        <Select options={cities} />
                    </div>
                    <p>city</p>
                </label>
                <label className='name' htmlFor='address'>
                    <input type='text' name='address' id='address' />
                    <p>address</p>
                </label>
                <label className='name' htmlFor='date'>
                    <input type='date' name='date' id='date' />
                    <p>date</p>
                </label>
                <label className='name' htmlFor='time'>
                    <input type='time' name='time' id='time' />
                    <p>time</p>
                </label>
                <label className='name' htmlFor='price'>
                    <input type='number' name='price' id='price' />
                    <p>price</p>
                </label>
                <label className='name' htmlFor='price'>
                    <input type='number' name='price' id='price' />
                    <p>pool</p>
                </label>
                <label htmlFor='currency'>
                    <div className="select">
                        <Select options={cities} />
                    </div>
                    <p>currency</p>
                </label>
                <label className='description' htmlFor='description'>
                    <textarea name='description' id='description' />
                    <p>description</p>
                </label>
                <label className='name' htmlFor='image-url'>
                    <input type='text' name='image-url' id='image-url' />
                    <p>image-url</p>
                </label>

                <Button type='submit' onclick={(e) => handleSubmit(e)} text="create" color='var(--main-gradient)' />
            </form>
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

    & h2 {
        margin-bottom: 20px;
        text-align: center;
    }

    & form {
        width: 400px;
        display: grid;
        gap: 20px;
        margin: 0 auto;

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

            &.description {
                & p {
                    order: 0;
                }

                & textarea {
                    order: 1;
                    height: 150px;
                }
            }
        }

        & button {
            margin-top: auto;
        }
    }
`