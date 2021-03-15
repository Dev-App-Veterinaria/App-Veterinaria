import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {ScrollView} from "react-native-gesture-handler";
import normalizador from "../../Controllers/normalizador";
import {useDoencas} from "../../Context/contextDoencas";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        backgroundColor: "#fff",
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

export default function Informacoes() {
    const {doencas} = useDoencas()

    let separaArray = (tags) => tags.join(", ");
    const I = (props) => <Text style={{fontStyle: 'italic'}}>{props.children}</Text>

    return (
        <ScrollView style={{flex: 1}}
                    contentContainerStyle={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Doença</Text>
                <Text style={styles.txt}>{doencas.info.name} (<I>{doencas.info.scientificName}</I>)</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Agente Epidemiológico</Text>
                <Text style={styles.txt}>{doencas.info.etiologicalAgent}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Vetor</Text>
                <Text style={styles.txt}>{doencas.info.vector}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Ciclo de Vida</Text>
                <Text style={styles.txt}>{doencas.info.lifeCycle}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Transmissão</Text>
                <Text style={styles.txt}>{doencas.info.transmission}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Manifestação Clínica</Text>
                <Text style={styles.txt}>{doencas.info.clinicalManifestation}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Ciclo de Vida</Text>
                <Text style={styles.txt}>{doencas.info.complications}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Transmissão</Text>
                <Text style={styles.txt}>{doencas.info.distribution}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.txtTitulo}>Estados</Text>
                <Text style={styles.txt}>{separaArray(doencas.info.states)}</Text>
            </View>
        </ScrollView>
    )
}
