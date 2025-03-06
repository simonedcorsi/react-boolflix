import { useState, useEffect } from "react"

export function Search( ){

    const [query, setQuery] = useState('')


    // useEffect( () => {
    //     console.log(query)
    // }, [query])

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }

    return (
        <>
            <form onSubmit={e => HandleSubmit(e)}>
                <input type="text" onChange={ e => setQuery( e.target.value ) } />
                <button type="submit">Cerca</button>
            </form>
        </>
    )
}