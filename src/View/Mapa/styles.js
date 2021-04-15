import {Dimensions, StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    mapa: {
        ...StyleSheet.absoluteFillObject,
    },
    btn: {
        position: "absolute",
        bottom: 0
    },
    containerMapa: {
        alignItems: 'flex-end'
    },
    tamanhoBtn : normalizador.widthPercentageToDP("10%"),
    telaErro:{
        flex:1,
        width:"100%",
        height: "100%",
        flexDirection:"column",
        position: "absolute",
        top: 0,
        backgroundColor: "#4f40b5"
    },
    btnLogo : {
        width: normalizador.widthPercentageToDP("10%"),
        height: normalizador.widthPercentageToDP("10%"),
        position: "absolute",
        top: normalizador.heightPercentageToDP('6.2%')
    }
})
