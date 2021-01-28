import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

//Tela contendo as informações de uma doença
export default function (props) {
  const info = props.route.params;

  const I = (props) => <Text style={{fontStyle: 'italic'}}>{props.children}</Text>

  return (
    <ScrollView style={{flex: 1}}contentContainerStyle={styles.container}>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Doença</Text>
            <Text style={styles.txt}>{info.name} (<I>{info.scientificName}</I>)</Text>
            
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Agente Epidemiológico</Text>
            <Text style={styles.txt}>{info.etiologicalAgent}</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Vetor</Text>
            <Text style={styles.txt}>{info.vector}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Ciclo de Vida</Text>
            <Text style={styles.txt}>{info.lifeCycle}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Transmissão</Text>
            <Text style={styles.txt}>{info.transmission}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Vetor</Text>
            <Text style={styles.txt}>{info.clinicalManifestation}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Ciclo de Vida</Text>
            <Text style={styles.txt}>{info.complications}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Transmissão</Text>
            <Text style={styles.txt}>{info.distribution}</Text>
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>Estados</Text>
            <Text style={styles.txt}>{info.states}</Text>
        </View>
    </ScrollView>
  );
}
