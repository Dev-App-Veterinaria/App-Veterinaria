import {Dimensions, StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

const tamanhoBarraDeBusca = normalizador.heightPercentageToDP("6%"); 

export default StyleSheet.create({
    container: {
        flex: 2,
    },
    mapa: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - tamanhoBarraDeBusca,
    },
    btn: {
        position: "absolute"
    },
    containerMapa: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    barraDeBusca:{
        position: 'absolute',
        top: 0,
        alignItems: "center",
        height: normalizador.heightPercentageToDP("6%"),
        width: normalizador.widthPercentageToDP("100%"),
        flexDirection: "row-reverse",
        paddingTop: 0,
        paddingHorizontal: 2,
        marginBottom: 3,
        backgroundColor: "#4f40b5"
    }
})
