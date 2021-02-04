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

export default function Glossario(){
    const [doencas, setDoencas] = React.useState([]);
    const [carregado, setCarregando] = React.useState(true);
    const navigation = useNavigation();

    React.useEffect(()=>{
        listarDoencas()
            .then(itens => {
                setDoencas(itens);
            }
        )
    }, []);

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
                    <Text style={styles.txtDescricao}>{props.etiologicalAgent}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <BarraDeBusca
             style={styles.barraDeBusca}/>
            <FlatList contentContainerStyle={styles.flatList}
                data={doencas}
                keyExtractor={item => item._id}
                renderItem={({item}) => itemListModel(item)}/>            
        </View>
    )
} 