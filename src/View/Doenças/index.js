import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {buscarDoencasPorEstado} from '../../Controllers/controladorDoenças';
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import styles from './styles'

// Tela das doenças de cada estado
export default function(props){
    const [carregando, setCarregando] =  useState(true);
    const [erro, setErro] = useState(null);
    const [doencas, setDoencas] = useState([]);
    const navigation = useNavigation()

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

    //RenderItem da flatList
    function renderItem(props){
        return(
            <TouchableOpacity
                style={styles.containerRenderItem}
                onPress={() => {navigation.navigate("Informações", props)}}>

                <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                <Text style={styles.txtDescricao}>{props.etiologicalAgent}</Text>
            </TouchableOpacity>
        )
    }

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
            <FlatList
                columnWrapperStyle={styles.flatList}
                data={doencas}
                keyExtractor={item => item._id}
                renderItem={({item}) => renderItem(item)}
                numColumns={2}/>
        </View>
    )
}
