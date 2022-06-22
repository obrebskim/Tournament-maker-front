import React from 'react'

interface Props {
    text: string,
    color: string,
}

export default function Button({ text }: Props) {

    return (
        <button>{text}</button>
    )
}
