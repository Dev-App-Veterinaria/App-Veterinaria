import React, {createContext, useState, useContext} from "react"

const DadosContext = createContext(null);

export default function DoencasProvider({children}){
    const [doencas, setDoencas] = useState({doencas: [], info: {}})

    return (
        <DadosContext.Provider value={{doencas, setDoencas}}>
            {children}
        </DadosContext.Provider>
    )
}


export function useDoencas(){
    const context = useContext(DadosContext)
    if(!context){
        throw Error("useDoencas deve estar dentro de um DoencasProvider")
    }
    const {doencas, setDoencas} = context
    return {doencas, setDoencas}
}
