import React, {useEffect, useState} from "react"
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native"
import styles from "../../View/Glossario/styles"
import TelaDeErro from "./telaDeErro";
import {useDoencas} from "../../Context/contextDoencas";
import {useArtigos} from "../../Context/contextArtigos";
import {listarArtigos} from "../../Controllers/controladorArtigos";
import {useNavigation} from "@react-navigation/native";

export default function FlatListArtigos({tela}) {
    const {doencas} = useDoencas()
    const {artigos, setArtigos} = useArtigos()
    const [artigosSelecionados, setArtigosSelecionados] = useState([])
    const [carregando, setCarregando] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        filtrarArtigos()
    }, [])

    function filtrarArtigos() {
        if (!tela) {
            let artigosSelecionados
            if (doencas.estado) {
                artigosSelecionados = artigos.artigos.filter(obj => {
                    return (obj.disease === doencas.info.scientificName && obj.state.includes(doencas.estado))
                })
            } else {
                artigosSelecionados = artigos.artigos.filter(obj => {
                    return (obj.disease === doencas.info.scientificName)
                })
            }
            artigosSelecionados.sort(compare)
            setArtigosSelecionados(artigosSelecionados)
        }
    }

    function inicializarArtigos(){
        listarArtigos()
            .then(response => {
                if(response.length === 0){
                    setArtigos({artigos: []})
                }else{
                    setArtigos({artigos: response})
                }
                setCarregando(false)
            })
            .catch(e => {
                e.message = "Erro! Verifique sua conexão com a internet."
                setArtigos({artigos: [], erro: e})
                setCarregando(false)
            })
        filtrarArtigos()
    }

    function compare(a, b){
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }

    if(carregando){
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5"/>
    }

    if (tela && artigos.erro) {
        return <TelaDeErro
            erro={artigos.erro}
            mensagem={artigos.erro.message}
            mensagemBotao="Tentar novamente"
            botao={() => {
                setCarregando(true)
                inicializarArtigos()
            }}/>
    }

    if(!tela && (artigosSelecionados.length < 1 || artigos.artigos.length < 1)){
        return <TelaDeErro
            mensagem={"Nenhum resultado encontrado!"}
            mensagemBotao="Tentar novamente"
            botao={() => {
                setCarregando(true)
                inicializarArtigos()
            }}/>
    }

    //RenderItem da flatList
    function itemListModel(props) {
        return (
            <TouchableOpacity
                style={styles.listitem}
                onPress={ () => {navigation.navigate("InformacoesArtigos", {artigo: props})} }>
                <View style={styles.containerImagem}>
                    <Text style={{alignSelf: "center", color: "#fff", fontSize: 18}}>
                        {props.name.charAt(0)}
                    </Text>
                </View>
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.name}</Text>
                    <Text style={styles.txtDescricao} numberOfLines={2}>{props.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={tela ? artigos.artigos : artigosSelecionados}
                keyExtractor={item => item._id}
                renderItem={({item}) => itemListModel(item)}/>
        </View>
    )
}
