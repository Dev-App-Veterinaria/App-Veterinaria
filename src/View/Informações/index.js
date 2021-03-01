import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import FlatListArtigos from "../../Components/Visuais/flatListArtigos";
import Informacoes from "../../Components/Visuais/informacoes";

//Tela contendo as informações de uma doença
export default function (props) {
    const [artigos, setArtigos] = useState(false);
    const info = props.route.params.info;
    const dadosArtigos = props.route.params.artigos;

    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => setArtigos(false)}>
                    <Text style={{...styles.btn, color: artigos ? "#dbdbdb" : "#4f40b5"}}>Doença</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setArtigos(true)}>
                    <Text style={{...styles.btn, color: artigos ? "#4f40b5" : "#dbdbdb"}}>Artigos</Text>
                </TouchableOpacity>
            </View>
            {artigos && <FlatListArtigos info={dadosArtigos}/>}
            {!artigos && <Informacoes info={info}/>}
        </View>
    );
}
