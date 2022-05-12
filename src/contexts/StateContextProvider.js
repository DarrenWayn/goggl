import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const getResults = async (type) => {
    setLoading(true)

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      },
    })

    const data = await res.json()
    // setResults(data)

    // console.log({data})
    // if(type === '/news') {
    //     console.log({data})
    // }

    // if(type.includes('/news')) {
    //     console.log({data})
    // }
    console.log({type, data})
    if(type.includes('/news')) {
        setResults(data.entries)
    } else if(type.includes('/image')) {
        setResults(data.image_results)
    } else {
        setResults(data)
    }
    setLoading(false)
  }

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)