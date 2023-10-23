import { createContext, useState } from "react";

export const Context = createContext(null)
export const ContextProvider = ({ children }) => {

    const [ValorTotalState, setValorTotalState] = useState(null)
    const [idEvento, setIdEvento] = useState(null)

    return <Context.Provider value={{ ValorTotalState, setValorTotalState, idEvento, setIdEvento }}>
        {children}
    </Context.Provider>

    
}

