import React,{useEffect, useState} from "react"
import {listarArtigos} from "../../Controllers/controladorArtigos";
import {ActivityIndicator, View} from "react-native";
import TelaDeErro from "../../Components/Visuais/telaDeErro";
import FlatListArtigos from "../../Components/Visuais/flatListArtigos"
import BarraDeBusca from "../../Components/Visuais/barraDeBusca";

export default function artigos(){
    const [carregando, setCarregando] = useState(true)
    const [artigos, setArtigos] = useState([])
    const [erro, setErro] = useState(null)

    function inicializarArtigos(){
        listarArtigos()
            .then(item => {
                setArtigos(item)
                setCarregando(false)
            })
            .catch(erro => {
                setErro(erro)
                setCarregando(false)
            })
    }

    useEffect(() => {
        inicializarArtigos()
    }, [])


    if(carregando){
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5"/>
    }

    if(erro){
        return (
            <TelaDeErro
                //A tela de erro recebe um erro ou true para saber q está lidando com um problema
                // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
                erro={erro}
                mensagem="Erro!\n Verifique sua conexão com a internet e tente novamente."
                mensagemBotao="Tentar novamente"
                botao={() => {
                    setCarregando(true);
                    setErro(null);
                    inicializarArtigos();
                }}/>
        )
    }

//Tela de erro para nenhum artigo encontrado
    if(artigos.length < 1){
        return <TelaDeErro mensagem={"Nenhum resultado encontrado!"}/>
    }

    return(
        <View style={{flex: 1}}>
            <BarraDeBusca
                onChangeText={() => {}}
                value={""}
                navegacao={""}
                style={{position: "relative"}}/>
            <FlatListArtigos info={artigos}/>
        </View>

    )
}
