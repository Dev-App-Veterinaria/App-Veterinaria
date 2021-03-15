import React from "react";
import {View, Text, ScrollView, Linking} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function InformacoesArtigos (props) {
    const artigo = props.route.params.artigo;
    const deveExibirLink = artigo.url != null; 
    return (
        <View style={{flex:1, justifyContent: "space-around", backgroundColor: "#fff",}}>
            <View style={styles.container}>
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
            </View>
            {deveExibirLink ?
                <TouchableOpacity 
                    style={styles.botaoUrl}
                    onPress={() => Linking.openURL(artigo.url)} >
                    <Text style={styles.url}>
                        Acessar artigo
                    </Text> 
                </TouchableOpacity>
                :
                <></>
            }
        </View>
    );
}
