import React from "react";
import {View, Text, Linking} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function InformacoesArtigos (props) {
    const artigo = props.route.params.artigo;

    return (
        <View style={{flex:1, justifyContent: "space-around", backgroundColor: "#fff",}}>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.txtTitulo}>Título</Text>
                    <Text style={styles.txt}>{artigo.name}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.txtTitulo}>Doença</Text>
                    <Text style={styles.txt}>{artigo.disease} </Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.txtTitulo}>Citação</Text>
                    <Text style={styles.txt}>{artigo.citation}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.txtTitulo}>Estados</Text>
                    <Text style={styles.txt}>{artigo.state.join(", ")}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.botaoUrl}
                onPress={() => Linking.openURL( "https://doi.org/" + artigo.doi)} >
                <Text style={styles.url}>
                    Acessar artigo
                </Text>
            </TouchableOpacity>
        </View>
    );
}
