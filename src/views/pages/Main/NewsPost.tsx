import React from 'react'
import styled from 'styled-components'
import { newsTumbnailType } from '../../../Types/interfaces'

interface Props {
    post: newsTumbnailType,
}

export default function NewsPost({ post }: Props) {
    return (
        <Container title={post.title}>
            <div className="title">
                <h3>{post.title}</h3>
                <p>{post.feed}</p>
                <p className='date'>date: {post.date}</p>
            </div>
            <img src={post.img} alt="" />
        </Container>
    )
}

const Container = styled.article`
    position: relative;
    background: #fff;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        & .title {
            opacity: 1;
        }

        &::before {
            transform: translateY(100%);
        }
    }

    &::before {
        content: '${props => props.title}';
        height: 80px;
        position: absolute;
        padding: 10px;
        bottom: 0;
        left: 0;
        right: 0;
        display:flex;
        align-items: center;
        background: rgba(51, 51, 51, .9);
        font-size: 1.6rem;
        font-weight: 600;
        transition: transform .2s;
        
    }

    & .title {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 40px 10px 10px 10px;
        background: rgba(51, 51, 51, .9);
        opacity: 0;
        transition: opacity .2s;

        & h3 {
            font-size: 2rem;
        }

        & p {
            font-size: 1.1rem;

            &.date {
                margin-top: auto;
            }
        } 
    }
    
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } 
`