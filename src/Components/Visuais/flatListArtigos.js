import React from "react"
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native"
import styles from "../../View/Glossario/styles"
import TelaDeErro from "./telaDeErro";


export default function flatListArtigos(dados) {
    if (dados.info.length < 1) {
        return <TelaDeErro mensagem={"Nenhum resultado encontrado!"}/>
    }

    //RenderItem da flatList
    function itemListModel(props) {
        return (
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {}}>
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagem}
                        source={require('../../../assets/iconeDoencas.png')}/>
                </View>
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.name}</Text>
                    <Text style={styles.txtDescricao} numberOfLines={2}>{props.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.flatList}
                      data={dados.info}
                      keyExtractor={item => item._id}
                      renderItem={({item}) => itemListModel(item)}/>
        </View>
    )
}
