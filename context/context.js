import React, { useState, createContext } from 'react'

const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  const [nonAlcoholic, setNonAlcoholic] = useState(false)

  return (
    <AppContext.Provider value={{nonAlcoholic, setNonAlcoholic}}>
        {children}
    </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}
