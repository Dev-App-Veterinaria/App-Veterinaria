import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import {buscarDoencasPorEstado} from '../../Controllers/controladorDoenças';
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import Artigos from "../../Components/Visuais/artigos";
import Doencas from "../../Components/Visuais/doencas"
import styles from './styles'
import normalizador from "../../Controllers/normalizador"

// Tela das doenças de cada estado
export default function(props){
    const [carregando, setCarregando] =  useState(true);
    const [erro, setErro] = useState(null);
    const [doencas, setDoencas] = useState([]);
    const [artigos, setArtigos] = useState(false)

    //Função que faz a solicitação das doenças novamente no servidor
    function inicializarDoencas(){
        const estado = props.route.params;
        buscarDoencasPorEstado(estado)
            .then(itens => {
                setDoencas(itens);
                setCarregando(false);
            })
            .catch(erro =>{
                setErro(erro);
                setCarregando(false);
            })
    }

    useEffect(()=>{
        inicializarDoencas()
    }, []);

    if(carregando){
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5" />
    }

    if (erro) {
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
                inicializarDoencas();
            }} />
        )
    }

    if(doencas.length < 1){
        return <TelaDeErro mensagem={"Nenhum resultado encontrado! \nVerifique a sua busca."} />
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => setArtigos(false)}>
                    <Text style={{...styles.btn, color: artigos ? "#dbdbdb" : "#4f40b5"}}>Doenças</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setArtigos(true)}>
                    <Text style={{...styles.btn, color: artigos ? "#4f40b5" : "#dbdbdb"}}>Artigos</Text>
                </TouchableOpacity>
            </View>
                {artigos && <Artigos/>}
                {!artigos && <Doencas props={doencas}/>}
        </View>
    )
}
