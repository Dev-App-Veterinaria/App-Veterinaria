import React from "react";
import {
    FlatList,
    Image,
    TouchableOpacity,
    Text,
    View  } from "react-native";
import {listarDoencas} from "../../Controllers/controladorDoenças";
import { useNavigation } from '@react-navigation/native';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import styles from "./styles";

export default function Glossario(props){
    const [encontradas, setEncontradas] = React.useState(null)
    const [doencas, setDoencas] = React.useState([]);
    const [carregado, setCarregando] = React.useState(true);
    const navigation = useNavigation();

    //Função passada como parâmetro para a tela da barra de busca
    function onChangeText(a){
        autoComplete(a)
    }

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
                setEncontradas(null)
            }
        }
    }

    //Inicializa as doenças
    React.useEffect(()=>{
        listarDoencas()
            .then(itens => {
                setDoencas(itens);
            }
        )
    }, []);

    /*Se for dado uma busca prévia pelo usuário, as doencas encontradas são atualizadas
      com base na busca, se não, é listado todas as doenças.*/
    React.useEffect(()=>{
        autoComplete(props.route.params.busca)
    }, [doencas]);

    //RenderItem da flatList
    function itemListModel(props){
        return(
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {navigation.navigate("Informações", props)}}>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/favicon.png')} />
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                    <Text style={styles.txtDescricao}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <BarraDeBusca
                onChangeText={(a) => onChangeText(a)}
                style={{position: "relative"}}/>
            <FlatList contentContainerStyle={styles.flatList}
                data={encontradas !== null ? encontradas : doencas}
                keyExtractor={item => item._id}
                renderItem={({item}) => itemListModel(item)}/>
        </View>
    )
}
