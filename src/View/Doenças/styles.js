import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    btn:{
        fontSize: normalizador.widthPercentageToDP("7%"),
    },
    containerBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        alignSelf: "center"
    },
})
