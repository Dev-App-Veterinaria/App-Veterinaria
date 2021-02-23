import React from "react"
import {View, FlatList, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"

export default function artigos(){
    const encontradas = [{_id: "huwfie", titulo: "Some text"}]
    const navigation = useNavigation()

    function itemListModel(props){
        console.log(props)
        return( <TouchableOpacity
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
        </TouchableOpacity>)
    }
    return(<View style={{flex: 1}}>
        

    </View>)
}