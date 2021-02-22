import React from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    Text,
    View  } from "react-native";
import {listarDoencas} from "../../Controllers/controladorDoenças";
import { useNavigation } from '@react-navigation/native';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import TelaDeErro from '../../Components/Visuais/telaDeErro';
import styles from "./styles";

export default function BuscarDoencas({route}, props){
    const [encontradas, setEncontradas] = React.useState(null);
    const [textoBarra, setTextoBarra] = React.useState('');
    const [doencas, setDoencas] = React.useState([]);
    const [erro, setErro] = React.useState(null);
    const [carregando, setCarregando] = React.useState(true);
    const navigation = useNavigation();

    /**
     * Métodos do ciclo de vida da tela
     */
    //Função que faz a solicitação das doenças novamente no servidor
    function inicializarDoencas(){
        listarDoencas()
            .then(itens => {
                    setDoencas(itens);
                    setCarregando(false)
                }
            )
            .catch(erro =>{
                setErro(erro);
                setCarregando(false);
            })
    }

    //Inicializa as doenças
    React.useEffect(()=>{
        inicializarDoencas()
    }, []);

    React.useEffect(()=>{
        if(route.params !== undefined){
            if(route.params.busca !== undefined){
                setTextoBarra(route.params.busca);
            }
        }
    }, [route.params]);

    //É responsável por atualizar as doenças com base na pesquisa dada pela barra de busca
    function autoComplete(busca){
        if(busca !== undefined){
            let pesquisa = busca.toLowerCase()
            if(busca.trim() !== ""){
                const resultado = doencas.filter(obj => {
                    return obj.scientificName.toLowerCase().match(new RegExp(`${pesquisa}`)) || (obj.name.toLowerCase().match(new RegExp(`${pesquisa}`)));
                })
                setEncontradas(resultado)
            }else{
                setEncontradas(doencas)
            }
        }
    }

    React.useEffect(()=>{
        autoComplete(textoBarra)
    },[textoBarra])

    /*Se for dado uma busca prévia pelo usuário, as doencas encontradas são atualizadas
      com base na busca, se não, é listado todas as doenças.*/
    React.useEffect(()=>{
        autoComplete(textoBarra)
    }, [doencas]);

    //RenderItem da flatList
    function itemListModel(props){
        return(
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {navigation.navigate("Informações", props)}}>
                <View style={styles.containerImagem}>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/iconeDoencas.png')} />
                </View>
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                    <Text style={styles.txtDescricao}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    if(carregando){
        return <ActivityIndicator style={{flex: 1}} size="large" color="#4f40b5" />
    }

    let exibirBusca;
    if(encontradas.length > 0){
        exibirBusca =(
            <FlatList contentContainerStyle={styles.flatList}
            data={encontradas}
            keyExtractor={item => item._id}
            renderItem={({item}) => itemListModel(item)}/>
        )
    }else{
        exibirBusca = <TelaDeErro mensagem={"Nenhum resultado encontrado! \nVerifique a sua busca."} />
    }

    if (erro) {
        return (
            <TelaDeErro
                //A tela de erro recebe um erro ou true para saber q está lidando com um problema
                // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
                erro={erro}
                mensagem="Erro! Verifique sua conexão com a internet e tente novamente"
                mensagemBotao="Tentar novamente"
                botao={() =>{
                    setCarregando(true);
                    setErro(null);
                    inicializarDoencas()}} />
        )
    }

    return(
        <View style={styles.container}>
            <BarraDeBusca
                onChangeText={(a)=> setTextoBarra(a)}
                value={textoBarra}
                navegacao="Pesquisar"
                style={{position: "relative"}}/>
            {exibirBusca}
        </View>
    )
}
