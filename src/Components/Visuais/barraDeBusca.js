import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, ToastAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalizador from '../../Controllers/normalizador';
import BuscaProvider, {useBusca} from "../../Context/contextBusca";

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
    const {busca, setBusca} = useBusca()
    const navigation = useNavigation()

    //Verifica se o campo de busca é válido, se sim, leva o usuário para a tela de resultados
    function validarEntrada(tela) {
        if (busca == null){
            exibirToastErro();
        }else{
            if (busca.trim() == null || busca.trim() === "") {
                exibirToastErro()
            }else{
                handleNavigateToSearch(tela)
            }
        }
    }

    //Faz a navegação para a tela de glossário passando a busca e o nome
    function handleNavigateToSearch(tela){
        navigation.navigate(tela)
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
        <BuscaProvider>
            <View style={{...styles.barraDeBusca, ...props.style, ...props}}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(a) => setBusca(a)}
                    onSubmitEditing={() =>
                        validarEntrada(props.navegacao)}
                    returnKeyType={"search"}
                    placeholder="Digite o termo a ser buscado"
                    value={busca}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        validarEntrada(props.navegacao)}>
                    <Icon
                        name="search"
                        color="#4f40b5"
                        size={normalizador.widthPercentageToDP("4%")}
                        style={styles.icone}/>
                </TouchableOpacity>
            </View>
        </BuscaProvider>

    )
}
