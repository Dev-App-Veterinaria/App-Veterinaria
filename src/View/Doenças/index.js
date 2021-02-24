import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {buscarDoencasPorEstado} from '../../Controllers/controladorDoenças';
import {buscarArtigosPorEstado} from "../../Controllers/controladorArtigos";
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import styles from './styles'
import {useNavigation} from "@react-navigation/native";

// Tela das doenças de cada estado
export default function (props) {
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [doencas, setDoencas] = useState([]);
    const [artigos, setArtigos] = useState([]);
    const navigation = useNavigation()

    function inicializarDados(){
        try{
            inicializarDoencas();
            inicializarArtigos();
        }catch (e){
            setCarregando(false)
        }
    }

    //Função que faz a solicitação das doenças novamente no servidor
    function inicializarDoencas(){
        const estado = props.route.params;
        buscarDoencasPorEstado(estado)
            .then(itens => {
                setDoencas(itens);
            })
            .catch(erro => {
                setErro(erro);
                throw new Error("Solicitação falhou")
            })
    }

    //Função que faz a solicitação dos artigos novamente no servidor
    function inicializarArtigos(){
        const estado = props.route.params;
        buscarArtigosPorEstado(estado)
            .then(itens => {
                setArtigos(itens);
                setCarregando(false)
            })
            .catch(erro => {
                setErro(erro);
                throw new Error("Solicitação falhou")
            })
    }

    useEffect(() => {
        inicializarDados()
    }, []);

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
                    inicializarDados();
                }}/>
        )
    }

    if(doencas.length < 1){
        return <TelaDeErro mensagem={"Nenhum resultado encontrado! \nVerifique a sua busca."}/>
    }

    //RenderItem da flatList
    function renderItem(props){
        //Faz a filtragem dos artigos da doença selecionada
        let artigosSelecionados = artigos.filter(obj => {
            return obj.disease === props.scientificName
        })

        return (
            <TouchableOpacity
                style={styles.containerRenderItem}
                onPress={() => {
                    navigation.navigate("Informações", {info: props, artigos: artigosSelecionados})
                }}>

                <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                <Text style={styles.txtDescricao}>{props.etiologicalAgent}</Text>
            </TouchableOpacity>
        )
    }

    return (
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
