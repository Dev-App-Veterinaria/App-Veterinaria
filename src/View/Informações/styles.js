import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        fontWeight: "bold",
        fontSize: normalizador.widthPercentageToDP("7%"),
    },
    containerBtn: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignSelf: "center"
    },
})
