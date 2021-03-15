import React, {useState} from "react";
import { ActivityIndicator, FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import {listarDoencas} from "../../Controllers/controladorDoenças";
import {useNavigation} from '@react-navigation/native';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import styles from "./styles";
import {useBusca} from "../../Context/contextBusca";
import {useDoencas} from "../../Context/contextDoencas";

export default function Glossario() {
    const [encontradas, setEncontradas] = useState(null);
    const {busca} = useBusca();
    const {doencas, setDoencas} = useDoencas();
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const navigation = useNavigation();

    //Inicializa as doenças
    React.useEffect(() => {
        inicializarDoencas()
    }, []);

    //Faz a atualização das doenças selecionadas
    React.useEffect(() => {
        autoComplete(busca)
    }, [doencas, busca])

    //É responsável por atualizar as doenças com base na pesquisa dada pela barra de busca
    function autoComplete(busca) {
        if (busca !== undefined) {
            if(doencas.doencas !== undefined){
                let pesquisa = busca.toLowerCase()
                if (busca.trim() !== "") {
                    const resultado = doencas.doencas.filter(obj => {
                        return obj.scientificName.toLowerCase().match(new RegExp(`${pesquisa}`)) || (obj.name.toLowerCase().match(new RegExp(`${pesquisa}`)));
                    })
                    setEncontradas(resultado)
                } else {
                    setEncontradas(doencas.doencas)
                }
            }
        }
    }

    //Função que faz a solicitação das doenças novamente no servidor
    function inicializarDoencas() {
        listarDoencas()
            .then(itens => {
                setDoencas({doencas: itens});
                setCarregando(false)
                }
            )
            .catch(erro => {
                setErro(erro);
                setCarregando(false);
            })
    }

    //RenderItem da flatList
    function itemListModel(props) {
        return (
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {
                    setDoencas({...doencas, info: props})
                    navigation.navigate("Informações")
                }}>
                <View style={styles.containerLetra}>
                    <Text style={styles.letra}>
                        {props.scientificName.charAt(0)}
                    </Text>
                </View>
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                    <Text style={styles.txtDescricao}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    if (carregando) {
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5"/>
    }

    //A tela de erro recebe um erro ou true para saber q está lidando com um problema
    // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
    if(erro){
        return <TelaDeErro
                    erro={erro}
                    mensagem="Erro! Verifique sua conexão com a internet e tente novamente."
                    mensagemBotao="Tentar novamente"
                    botao={() => {
                        setCarregando(true);
                        setErro(null);
                        inicializarDoencas()
                }}/>
    }

    let exibirBusca

    if(encontradas.length > 0){
        exibirBusca = (
            <FlatList
                contentContainerStyle={styles.flatList}
                data={encontradas}
                keyExtractor={item => item._id}
                renderItem={({item}) => itemListModel(item)}/>
                )
    }else{
        return <TelaDeErro mensagem={"Nenhum resultado encontrado! \nVerifique a sua busca."}/>
    }


    return (
        <View style={styles.container}>
            <BarraDeBusca
                navegacao="Glossário"
                style={{position: "relative"}}/>
            {exibirBusca}
        </View>
    )
}
