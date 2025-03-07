import { useGlobalContext } from "../context/GlobalContext"
import { ResultsList } from "./ResultsList"

export function Main() {

    const { movies, tvs } = useGlobalContext()

    // const HandleStars = (vote) =>  Math.ceil( vote / 2 )

    return (
        <main>
            <h2>Films</h2>
            <ResultsList type="movies" items={movies}/>

            {/* <ul>
                {
                    movies.map( (elem) => {
                        return (
                            <li key={elem.id}>
                                {elem.title} - {elem.original_language} - {elem.original_title} - { HandleStars( parseInt(elem.vote_average) ) }
                            </li>
                        )
                    })
                }
            </ul> */}

            <h2>Serie tv</h2>
            <ResultsList type="tvs" items={tvs}/>

            {/* <ul>
                {
                    tvs.map( (elem) => {
                        return (
                            <li key={elem.id}>
                                {elem.name}
                            </li>
                        )
                    })
                }
            </ul> */}

        </main>
    )
}