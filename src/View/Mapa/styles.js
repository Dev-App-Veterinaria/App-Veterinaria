import {Dimensions, StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mapa: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    btn: {
        position: "absolute"
    },
    containerMapa: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    tamanhoBtn : normalizador.widthPercentageToDP("10%"),
})
