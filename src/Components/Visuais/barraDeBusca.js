import React, {useState} from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import normalizador from '../../Controllers/normalizador';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: "center",
        height: normalizador.heightPercentageToDP("6%"),
        width: normalizador.widthPercentageToDP("100%"),
        flexDirection: "row-reverse",
        paddingTop: 0,
        paddingHorizontal: 2,
        marginBottom: 3,
        backgroundColor: "#4f40b5"
    },
    textInput: {
        flex: 1,
        height: "80%",
        flexGrow: 1,
        paddingHorizontal: 6,
        marginStart: 2,
        marginBottom: 0,
        backgroundColor: "#fff",
    },
    icone: {
        marginHorizontal: 10,
        marginTop: 4
    },
    button: {
        position: "absolute",
    }
});

export default function(){
    const [busca, setBusca] = useState("");

    //Verifica se o campo de busca é válido
    function validarEntrada() {
        if (busca == null){
            exibirToastErro();
        }else{
            if (busca.trim() == null || busca.trim() === "") {
                exibirToastErro()
            }else{
                console.log("deu certo")
            }
        }
    }

    //Exibe uma mensagem de erro referente a pesquisa
    function exibirToastErro() {
        ToastAndroid.showWithGravity(
            "Insira algo a ser buscado!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={(a) => setBusca(a)}
                placeholder="Digite o termo a ser buscado"
                value={busca}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    validarEntrada()}>
                <Icon
                    name="search"
                    color="#4f40b5"
                    size={normalizador.widthPercentageToDP("4%")}
                    style={styles.icone}/>
            </TouchableOpacity>
        </View>
    )
}
