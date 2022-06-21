import React from 'react'

interface PropsTypes {
    text: string,
    onclick(): any
}

export default function Button({ text, onclick }: PropsTypes) {
    return (
        <button onClick={onclick}>{text}</button>
    )
}
