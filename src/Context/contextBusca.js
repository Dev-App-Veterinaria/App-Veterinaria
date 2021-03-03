import React, {createContext, useState, useContext} from "react"

const BuscaContext = createContext(null);

export default function BuscaProvider({children}){
    const [busca, setBusca] = useState("")

    return (
        <BuscaContext.Provider value={{busca, setBusca}}>
            {children}
        </BuscaContext.Provider>
    )
}


export function useBusca(){
    const context = useContext(BuscaContext)
    if(!context){
        throw Error("useBusca deve estar dentro de um BuscaProvider")
    }
    const {busca, setBusca} = context
    return {busca, setBusca}
}
