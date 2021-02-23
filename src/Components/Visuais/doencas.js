import React from 'react'
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRenderItem: {
        backgroundColor: "#4f40b5",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%',
        marginTop: '4%',
        borderRadius: 10,
        width: normalizador.widthPercentageToDP('40%'),
        height: normalizador.widthPercentageToDP('35%')
    },
    flatList: {
        justifyContent: "space-around"
    },
    txtTitulo: {
        fontSize: normalizador.widthPercentageToDP('4%'),
        color: 'white',
        fontWeight: 'bold'
    },
    txtDescricao: {
        marginTop: '2%',
        color: 'white',
        textAlign: 'center'
    }
})

//Componente responsável pela renderização da lista de doenças
export default function doencas(doencas){
    const navigation = useNavigation()

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
                data={doencas.props}
                keyExtractor={item => item._id}
                renderItem={({item}) => renderItem(item)}
                numColumns={2}/>
        </View>
    )
}
