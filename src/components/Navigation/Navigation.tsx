import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi'
import Logo from '../../assets/Tournament_maker_logo.png'

export default function Navigation() {
    return (
        <Container>
            <div className="wrapper">
                <div className='logo'>
                    <NavLink to='/'>
                        <img src={Logo} alt='Tournament Maker Logo' />
                    </NavLink>
                </div>
                <ul className='navigators'>
                    <li><NavLink to='/news'>News</NavLink></li>
                    <li><NavLink to='/tournaments'>Tournaments</NavLink></li>
                    <li><NavLink to='/login'><FiLock className='icon' />Login</NavLink></li>
                </ul>
                <ul className='icons'>
                    <li><a href='https://www.facebook.com' className='facebook'><BsFacebook /></a></li>
                    <li><a href='https://www.instagram.com' className='instagram'><BsInstagram /></a></li>
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
    z-index: 10;

    & .wrapper {
        height: 100%;
        width: 1500px;
        margin: auto;
        display: grid;
        grid-template-columns: 150px auto 200px;
        gap: 20px;

        & .logo {
            display: flex;
            justify-content: center;
            align-items: center;

            & img {
                width: 100%;
            }
        }

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
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap:10px;
                    background: green;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 1.6rem;
                    text-decoration: none;
                    transition: all .3s;

                    &::after {
                        content: '';
                        height: 4px;
                        width: 80%; 
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%) scaleX(0);
                        background: linear-gradient(90deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
                        border-radius: 50px;
                        transition: all .3s;
                    }

                    &:hover::after {
                        transform: translateX(-50%) scaleX(1);
                    }

                    &.active {
                        background: linear-gradient(135deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
                        background-clip: text;
                        -webkit-text-fill-color: transparent;

                        &::after {
                            transform: translateX(-50%) scaleX(1);
                        }
                    }

                    &.active .icon {
                        color: rgba(255,40,0,1);
                    }

                    & .icon {
                        color: green;
                    }

                }
            }

            &.icons a {
                height: 75px;
                font-size: 2rem;
                color: green;
                transition: color .3s;

                &.facebook:hover {
                    color: #3b5998;
                }

                &.instagram:hover {
                    color: #c22681;
                }
            }
        }
    }

`