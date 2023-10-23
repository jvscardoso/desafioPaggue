import { createContext, useState } from "react";

export const ContextValorTotal = createContext({})
export const ContextValorTotalProvider = ({ children }) => {

    const [ValorTotalState, setValorTotalState] = useState(null)

    return <ContextValorTotal.Provider value={{ ValorTotalState, setValorTotalState }}>
        {children}
    </ContextValorTotal.Provider>
}