import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

//Tela contendo as informações de uma doença
export default function(props){
    const info = props.route.params.dados

    //RenderItem da flatList
    function renderItem(props){
        return(
            <View style={styles.containerRenderItem}>
                <Text style={styles.txtTitulo}>{props.item.titulo}</Text>
                <Text style={styles.txtDescricao}>{props.item.descricao}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={info}
                keyExtractor={info => info.titulo}
                renderItem={renderItem}/>
        </View>
    )
}
