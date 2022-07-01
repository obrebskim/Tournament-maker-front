import React from 'react'
import styled from 'styled-components'
import { FilterItemType } from '../../Types/interfaces'
import RedirectBtn from '../Common/RedirectBtn'

interface Props {
    usedFilters: FilterItemType[]
}

export default function Filters({ usedFilters }: Props) {

    return (
        <Container>
            <div className="filter-info">
                Filters:
                {
                    usedFilters.filter(f => f.checked).length < 1 ?
                        'no filters'
                        :
                        usedFilters.filter(f => f.checked).map(f => f.name).join()
                }
            </div>
            <RedirectBtn text='create your own' to='/tournaments/create' width='163px' />
        </Container>
    )
}

const Container = styled.div`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: #fff;
    box-shadow: var(--shadow);
    color: var(--main-dark);

`