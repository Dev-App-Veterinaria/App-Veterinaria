import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import buscarDoencasPorEstado from '../../Controllers/controladorDoenças';
import styles from './styles'

// Tela das doenças de cada estado
export default function(props){
    const [carregando, setCarregando] =  useState(true);
    const [erro, setErro] = useState(null);
    const [doencas, setDoencas] = useState([]);
    const navigation = useNavigation()

    useEffect(()=>{
        const estado = props.route.params;
        buscarDoencasPorEstado(estado)
            .then(itens => {
                setDoencas(itens);
                setCarregando(false);
            }
        )
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
