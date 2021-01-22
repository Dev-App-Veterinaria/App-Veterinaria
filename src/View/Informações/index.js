import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

//Tela contendo as informações de uma doença
export default function (props) {
  const info = props.route.params;
  console.log(info);

  return (
    <ScrollView style={{flex: 1}}contentContainerStyle={styles.container}>
        <View style={styles.itemContainer}>
            <Text style={styles.txtTitulo}>{info.name}</Text>
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
