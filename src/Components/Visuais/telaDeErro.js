import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"

    },
    texto: {
        color: "#4e4e4e",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 14,
        marginTop: 10,
        marginBottom: 12

    },
    imagem: {
        flex: 1,
        flexBasis: 150,
        maxWidth: 150,
        maxHeight: 150,
        marginBottom: 10,
        tintColor: "#4f40b5",
        flexWrap: "wrap",
    },
    botao: {
        flex: 1,
        backgroundColor: "#4f40b5",
        justifyContent: "center",
        marginTop: 30,
        maxWidth: 200,
        maxHeight: 45,
        elevation: 6

    },
    textoBotao: {
        flex: 0,
        fontSize: 16,
        flexDirection: "row",
        color: "#fff",
        width: 150,
        textAlign: "center"


    }

});



export default function TelaDeErro(props) {

    //Tela exibida quando Houver Erros de Solicitação na API
    if (props.erro) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagem}
                    source={require("../../../assets/ErroParasitour.png")} />
                <Text style={styles.texto}>
                    {props.mensagem}
                </Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={props.botao}>

                    <Text style={styles.textoBotao}>
                        {props.mensagemBotao}
                    </Text>

                </TouchableOpacity>
            </View>

        )
    }


    //Tela para buscas não encontradas
    return (
        <View style={styles.container}>
            <Image
                style={styles.imagem}
                source={require("../../../assets/ErroParasitour.png")} />
            <Text style={styles.texto}>
                {props.mensagem}
            </Text>
        </View>
    );

}