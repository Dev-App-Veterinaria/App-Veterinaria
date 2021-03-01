import React from "react"
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native"
import TelaDeErro from "./telaDeErro";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    listitem: {
        backgroundColor: "#fff",
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 6,
        marginHorizontal: 0,
        marginVertical: 0

    },
    txtTitulo: {
        fontSize: 16,
        color: '#4f40b5',
        fontWeight: 'bold'
    },
    txtDescricao: {
        marginTop: 2,
        color: '#000'
    },
    containerImagem: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#4f40b5",
        flexWrap: "wrap",
        marginTop: 10,
        marginHorizontal: 16
    }, 
    listitemContainerDescricao: {
        flex: 1,
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginVertical: 4,
        borderRadius: 6,
        paddingTop: 6,
        paddingBottom: 12,
        paddingEnd: 30,
        borderBottomWidth: 0.03,
        borderBottomColor: "#e4ddf3",
    }
})


export default function Artigos(dados) {
    if (dados.info.length < 1) {
        return <TelaDeErro mensagem={"Nenhum resultado encontrado!"}/>
    }

    //RenderItem da flatList
    function itemListModel(props) {
        console.log(props)
        return (
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {}}>
                <View style={styles.containerImagem}>
                    <Text style={{alignSelf: "center", color: "#fff", fontSize: 18}}>
                        {props.name.charAt(0)}
                    </Text>
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
