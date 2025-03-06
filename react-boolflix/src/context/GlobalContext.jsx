import { createContext, useState, useContext, Children } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    //dati .env
    const apikey = import.meta.env.VITE_API_KEY
    const endpoint = import.meta.env.VITE_ENDPOINT

    //data
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])


    const HandleSubmit = (e) => {
        e.preventDefault()
        // console.log(query)

        // https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro 
        axios.get(`${endpoint}movie?api_key=${apikey}&query=${query}`)
        .then( res => setMovie(res.data.results) )
    }

    
    const value = {
        query,
        setQuery,
        HandleSubmit
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

const useGlobalContext = () => useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}