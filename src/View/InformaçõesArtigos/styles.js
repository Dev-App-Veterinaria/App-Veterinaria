import {StyleSheet} from "react-native";
import normalizador from "../../Controllers/normalizador";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    container: {
        flex: 2,
        backgroundColor: "#fff",
        paddingHorizontal: '5%',
        alignContent: 'flex-start',
    },
    scrollViewContainer: {
        justifyContent: "space-around",
        backgroundColor: "#fff"
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
    url:{
        fontSize: normalizador.widthPercentageToDP("5%"),
        textAlign: "center",
        alignSelf: "center",
        color: "#fff",
    },
    botaoUrl:{
        padding: 10,
        marginBottom: '5%',
        marginRight: '3%',
        borderRadius: 50,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        elevation: 7,
        shadowColor: "#000",
        shadowOpacity: 50,
        width: normalizador.widthPercentageToDP("45%"),
        backgroundColor: "#4f40b5",
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
