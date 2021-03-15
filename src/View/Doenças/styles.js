import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    containerRenderItem: {
        backgroundColor: "#4f40b5",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%',
        marginTop: '4%',
        borderRadius: 10,
        width: normalizador.widthPercentageToDP('40%'),
        height: normalizador.widthPercentageToDP('35%')
    },
    flatList: {
        justifyContent: "space-around"
    },
    txtTitulo: {
        fontSize: normalizador.widthPercentageToDP('4%'),
        color: 'white',
        fontWeight: 'bold'
    },
    txtDescricao: {
        marginTop: '2%',
        color: 'white',
        textAlign: 'center'
    }
})
