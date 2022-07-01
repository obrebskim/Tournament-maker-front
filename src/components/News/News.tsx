import React from 'react'
import styled from 'styled-components'
import { newsTumbnailType } from '../../Types/interfaces'
import newsTumbnails from '../../fakeDB/newsTumbnails.json'
import NewsPost from './NewsPost'

interface Props {
    post: newsTumbnailType,
}

export default function News() {
    return (
        <Container>

            {
                newsTumbnails.map(n => <NewsPost key={n.id} post={n} />)
            }
        </Container>
    )
}

const Container = styled.section`
    width: 1200px;
    min-height: 400px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: -250px auto 100px auto;
    color: #fff;

    & article {
        box-shadow: var(--shadow);
    }
`