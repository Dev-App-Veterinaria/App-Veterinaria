import React from "react";
import {View, Text, ScrollView} from "react-native";
import styles from "./styles";

//Tela contendo as informações de uma doença
export default function InformacoesArtigos (props) {
    const artigo = props.route.params.artigo;

    return (
            <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Titulo</Text>
                <Text style={styles.txt}>{artigo.name}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Doença</Text>
                <Text style={styles.txt}>{artigo.disease} </Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>DOI</Text>
                <Text style={styles.txt}>{artigo.doi}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Estados</Text>
                <Text style={styles.txt}>{artigo.state.join(", ")}</Text>
            </View>
        </ScrollView>
    );
}
