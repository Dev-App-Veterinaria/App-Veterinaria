import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {buscarDoencasPorEstado} from '../../Controllers/controladorDoenças';
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import styles from './styles'
import {useNavigation} from "@react-navigation/native";
import {useDoencas} from "../../Context/contextDoencas";

// Tela das doenças de cada estado
export default function ({route}) {
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const {doencas, setDoencas} = useDoencas()
    const navigation = useNavigation()

    useEffect(() => {
        inicializarDoencas()
    }, []);

    //Função que faz a solicitação das doenças novamente no servidor
    function inicializarDoencas(){
        const estado = route.params;
        buscarDoencasPorEstado(estado)
            .then(itens => {
                setDoencas({doencas: itens});
                setCarregando(false)
            })
            .catch(erro => {
                setErro(erro);
                setCarregando(false)
            })
    }

    //RenderItem da flatList
    function renderItem(props){
        return (
            <TouchableOpacity
                style={styles.containerRenderItem}
                onPress={() => {
                    setDoencas({...doencas, info: props, estado: route.params})
                    navigation.navigate("Informações", props.scientificName)
                }}>

                <Text style={styles.txtTitulo}>{props.scientificName}</Text>
            </TouchableOpacity>
        )
    }

    if(carregando){
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5"/>
    }

    if (erro){
        return <TelaDeErro
            //A tela de erro recebe um erro ou true para saber q está lidando com um problema
            // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
            erro={erro}
            mensagem="Erro! Verifique sua conexão com a internet e tente novamente."
            mensagemBotao="Tentar novamente"
            botao={() => {
                setCarregando(true);
                setErro(null);
                inicializarDoencas();
            }}/>
    }
    
    if (doencas.doencas.length < 1){
        console.log(erro);
        return <TelaDeErro mensagem={"Nenhum resultado encontrado! Verifique a sua busca."}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                columnWrapperStyle={styles.flatList}
                data={doencas.doencas}
                keyExtractor={item => item._id}
                renderItem={({item}) => renderItem(item)}
                numColumns={2}/>
        </View>
    )
}
