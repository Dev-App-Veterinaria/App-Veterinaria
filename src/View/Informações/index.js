import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, ActivityIndicator} from "react-native";
import styles from "./styles";
import FlatListArtigos from "../../Components/Visuais/flatListArtigos";
import Informacoes from "../../Components/Visuais/informacoes";
import {buscarArtigos} from "../../Controllers/controladorArtigos";

//Tela contendo as informações de uma doença
export default function (props) {
    const [botaoArtigos, setBotaoArtigos] = useState(false);
    const [erro, setErro] = React.useState(null);
    const [carregando, setCarregando] = React.useState(true);
    const [artigos, setArtigos] = React.useState([]);
    const doenca = props.route.params.info;
    const estado = props.route.params.estado;

    function carregarArtigos(){
        buscarArtigos(doenca.scientificName, estado)
            .then(itens=>{
                setArtigos(itens);
                setCarregando(false);
            }
            ).catch(erro => {
                setErro(erro);
                setCarregando(false);
            })
    }
    
    useEffect(() => {
        carregarArtigos();
    });

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
                    carregarArtigos();
                }}/>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => setBotaoArtigos(false)}>
                    <Text style={{...styles.btn, color: botaoArtigos ? "#dbdbdb" : "#4f40b5"}}>Doença</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setBotaoArtigos(true)}>
                    <Text style={{...styles.btn, color: botaoArtigos ? "#4f40b5" : "#dbdbdb"}}>Artigos</Text>
                </TouchableOpacity>
            </View>
            {botaoArtigos && <FlatListArtigos info={artigos}/>}
            {!botaoArtigos && <Informacoes info={doenca}/> }
        </View>
    );
}
