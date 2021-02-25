import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {ScrollView} from "react-native-gesture-handler";
import normalizador from "../../Controllers/normalizador";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        alignItems: 'flex-start',
    },
    itemContainer: {
        paddingVertical: 10,
        marginBottom: 5
    },
    txtTitulo: {
        fontSize: normalizador.widthPercentageToDP("7%"),
        fontWeight: "bold",
        color: "#4f40b5",
    },
    txt: {
        fontSize: normalizador.widthPercentageToDP("5%"),
        color: "#020202",
        paddingTop: "1%"
    },
    containerRenderItem: {
        marginTop: "7%"
    }
})

export default function informacoes(props) {
    const info = props.info;
    let separaArray = (tags) => tags.join(", ");
    const I = (props) => <Text style={{fontStyle: 'italic'}}>{props.children}</Text>

    return (
        <ScrollView style={{flex: 1}}
                    contentContainerStyle={styles.container}>
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
                <Text style={styles.txtTitulo}>Manifestação Clínica</Text>
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
                <Text style={styles.txt}>{separaArray(info.states)}</Text>
            </View>
        </ScrollView>
    )
}
