import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

export default function Navigation() {
    return (
        <Container>
            <div className="wrapper">
                <div className='logo'>logo</div>
                <ul className='navigators'>
                    <li><NavLink to='/'>Main</NavLink></li>
                    <li><NavLink to='/tournaments'>Tournaments</NavLink></li>
                </ul>
                <ul className='icons'>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.nav`
    height: 75px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    background: #fff;
    box-shadow: var(--shadow);

    & .wrapper {
        height: 100%;
        width: 1500px;
        margin: auto;
        display: grid;
        grid-template-columns: 100px auto 200px;
        gap: 20px;

        & ul {
            height: 100%;
            display: flex;
            list-style: none;
            gap: 20px;

            &.navigators, &.icons {
                justify-content: end;
                align-items: center;
            }

            &.navigators {
                font-weight: bold;

                & a {
                    width: 150px;
                    height: 75px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }
            }
        }

    }

`