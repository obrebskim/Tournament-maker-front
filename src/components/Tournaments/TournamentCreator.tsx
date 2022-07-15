import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { OptionType, TournamentType } from '../../Types/interfaces'
import Button from '../Common/Button'
import { useNavigate } from 'react-router-dom'

export default function CreateTournamentForm() {

    const navigate = useNavigate()

    const [countries, setOptions] = useState<OptionType[]>([{ label: 'Germany', value: 'de' }, { label: 'Poland', value: 'pl' }, { label: 'United States', value: 'us' }])
    const [currencys, setCurrencys] = useState<OptionType[]>([{ label: 'Polski Złoty', value: 'PLN' }, { label: 'Euro', value: 'EUR' }, { label: 'US Dolar', value: 'USD' },])
    const [types, setTypes] = useState<OptionType[]>([{ label: 'Play-Off', value: 1 }, { label: 'Grand Slam', value: 2 }, { label: 'Brasilian Schedule', value: 3 }])

    const [name, setName] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [pool, setPool] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [website, setWebsite] = useState<string>('')
    const [currency, setCurrency] = useState<OptionType>({ label: 'Polski Złoty', value: 'PLN' })
    const [country, setCountry] = useState<OptionType>({ label: 'Poland', value: 'PL' })
    const [type, setType] = useState<OptionType>({ label: 'Play-Off', value: 1 })
    const [isFormValid, setIsFormValid] = useState<boolean>(true)

    const handleChange = (option: OptionType | null, callback: (param: any) => void) => {
        callback(option)
    }

    const nameInput = useRef<HTMLInputElement>()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        const form: Omit<TournamentType, 'id'> = {
            address,
            city,
            country: String(country.value),
            currency: String(currency.value),
            date,
            description,
            image,
            name,
            owner: "09ca94ca-1bad-47df-be28-e73c6e43fa9c",
            pool,
            price,
            time,
            type: Number(type.value),
            url: website,
        }
        if (!address || !city || !date || !description || !name || !time) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
            const resp = await fetch('http://localhost:3001/tournament',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                }
            )
            const data = await resp.json()
            console.log(data)
            if (data.isSuccess) {
                navigate(`/tournament/${data.id}`)
            }

            console.log(data)
        }
    }

    return (
        <Container>
            <h2>Create your own tournament!</h2>
            <form onSubmit={handleSubmit}>
                <label className='name' htmlFor='name'>
                    <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <p>tournament name</p>
                    <span>Fill this field.</span>
                </label>
                <label htmlFor='type'>
                    <div className="select">
                        <Select options={types} name='type' value={type} onChange={option => handleChange(option, setType)} />
                    </div>
                    <p>type</p>
                </label>
                <label htmlFor='country'>
                    <div className="select">
                        <Select options={countries} name='country' value={country} onChange={option => handleChange(option, setCountry)} />
                    </div>
                    <p>country</p>
                </label>
                <label className='name' htmlFor='city'>
                    <input type='text' name='city' id='city' value={city} onChange={(e) => setCity(e.target.value)} />
                    <p>City</p>
                    <span>Fill this field.</span>
                </label>
                <label className='name' htmlFor='address'>
                    <input type='text' name='address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <p>address</p>
                    <span>Fill this field.</span>
                </label>
                <label className='name' htmlFor='date'>
                    <input type='date' name='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <p>date</p>
                    <span>Fill this field.</span>
                </label>
                <label className='name' htmlFor='time'>
                    <input type='time' name='time' id='time' value={time} onChange={(e) => setTime(e.target.value)} />
                    <p>time</p>
                    <span>Fill this field.</span>
                </label>
                <label className='name' htmlFor='price'>
                    <input type='number' name='price' id='price' value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                    <p>price</p>
                </label>
                <label className='name' htmlFor='pool'>
                    <input type='number' name='price' id='pool' value={pool} onChange={(e) => setPool(Number(e.target.value))} />
                    <p>pool</p>
                </label>
                <label htmlFor='currency'>
                    <div className="select">
                        <Select options={currencys} value={currency} onChange={option => handleChange(option, setCurrency)} />
                    </div>
                    <p>currency</p>
                </label>
                <label className='description' htmlFor='description'>
                    <textarea name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <p>description</p>
                    <span>Fill this field.</span>
                </label>
                <label className='name' htmlFor='image-url'>
                    <input type='text' name='image-url' id='image-url' value={image} onChange={(e) => setImage(e.target.value)} />
                    <p>image-url</p>
                </label>
                <label className='name' htmlFor='website'>
                    <input type='text' name='website' id='website' value={website} onChange={(e) => setWebsite(e.target.value)} />
                    <p>website</p>
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

            & span {
                color: orangered;
                font-weight: bold;
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