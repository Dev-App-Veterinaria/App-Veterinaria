import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
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
    content:{
        fontSize: normalizador.widthPercentageToDP("5%"),
        color: "#020202",
        paddingTop: "1%",
        marginBottom: "5%"
    }
})
