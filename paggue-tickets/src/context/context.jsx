import { createContext, useState } from "react";

export const Context = createContext(null)
export const ContextProvider = ({ children }) => {

    const [ValorTotalState, setValorTotalState] = useState(null)
    const [idEvento, setIdEvento] = useState(null)
    const [personalInfo, setPersonalInfo] = useState({
        nome: '',
        cpf: '',
        endereco: '',
    });
    
    const [formularioEnvio, setFormularioEnvio] = useState({
        envioEmail: false,
        envioSMS: false,
    });

    return <Context.Provider value=
        {{
            ValorTotalState, setValorTotalState,
            idEvento, setIdEvento,
            personalInfo, setPersonalInfo,
            formularioEnvio, setFormularioEnvio,
        }}>
        {children}
    </Context.Provider>


}

