import React from 'react'
import { useParams } from 'react-router-dom'

export default function Tournament() {
    const { id } = useParams()
    return (
        <div>id turnieju {id}</div>

    )
}
