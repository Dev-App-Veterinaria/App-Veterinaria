import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

// Tela das doenças de cada estado
export default function(props){
    const info = props.route.params.doencas
    const navigation = useNavigation()

    //RenderItem da flatList
    function renderItem(props){
        return(
            <TouchableOpacity
                style={styles.containerRenderItem}
                onPress={() => {navigation.navigate("Informações", props)}}>

                <Text style={styles.txtTitulo}>{props.titulo}</Text>
                <Text style={styles.txtDescricao}>{props.info}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                columnWrapperStyle={styles.flatList}
                data={info}
                keyExtractor={item => item.titulo}
                renderItem={({item}) => renderItem(item)}
                numColumns={2}/>
        </View>
    )
}
