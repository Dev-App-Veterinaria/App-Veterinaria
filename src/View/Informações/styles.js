import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '7%',
        paddingHorizontal: '7%',
        alignItems: 'center',
    },
    txtTitulo: {
        fontSize: normalizador.widthPercentageToDP("7%"),
        fontWeight: "bold",
        color: "#4f40b5",
    },
    txtDescricao: {
        fontSize: normalizador.widthPercentageToDP("4%"),
        paddingTop: "1%"
    },
    containerRenderItem: {
        marginTop: "7%"
    }
})
