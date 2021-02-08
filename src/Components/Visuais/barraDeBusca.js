import React, {useState} from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, ToastAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalizador from '../../Controllers/normalizador';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: normalizador.heightPercentageToDP("6%"),
        width: normalizador.widthPercentageToDP("100%"),
        flexDirection: "row-reverse",
        paddingTop: 0,
        paddingHorizontal: 2,
        marginBottom: 0,
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
    },
    barraDeBusca:{
        alignItems: "center",
        height: normalizador.heightPercentageToDP("6%"),
        width: normalizador.widthPercentageToDP("100%"),
        flexDirection: "row-reverse",
        paddingTop: 0,
        paddingHorizontal: 2,
        marginBottom: 3,
        backgroundColor: "#4f40b5"
    }
});

export default function BarraDeBusca(props){
    const navigation = useNavigation()
    const [busca, setBusca] = useState("");

    //Verifica se o campo de busca é válido, se sim, leva o usuário para a tela de resultados
    function validarEntrada() {
        if (busca == null){
            exibirToastErro();
        }else{
            if (busca.trim() == null || busca.trim() === "") {
                exibirToastErro()
            }else{
                handleNavigateToSearch()
            }
        }
    }

    //Faz a navegação para a tela  de glossário porém passando a busca e o nome
    function handleNavigateToSearch(){
        navigation.navigate("Glossario", {busca: busca, nome: "Pesquisa"})
    }

    //Guarda o texto digitado pelo usuário e usa a função passada como parâmetro pelo elemento pai
    function onChangeText(a){
        setBusca(a)
        props.onChangeText(a)
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
        <View style={{...styles.barraDeBusca, ...props.style}}>
            <TextInput
                style={styles.textInput}
                onChangeText={(a) => onChangeText(a)}
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
