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
    tamanhoBtn : normalizador.widthPercentageToDP("10%"),
})
