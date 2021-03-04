import React, {createContext, useState, useContext} from "react"

const BuscaContext = createContext(null);

export default function ArtigosProvider({children}){
    const [artigos, setArtigos] = useState({artigos: [], erro: null})

    return (
        <BuscaContext.Provider value={{artigos, setArtigos}}>
            {children}
        </BuscaContext.Provider>
    )
}

export function useArtigos(){
    const context = useContext(BuscaContext)
    if(!context){
        throw Error("useArtigos deve estar dentro de um ArtigosProvider")
    }
    const {artigos, setArtigos} = context
    return {artigos, setArtigos}
}
