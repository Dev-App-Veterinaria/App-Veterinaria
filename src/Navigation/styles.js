import {StyleSheet} from 'react-native';
import normalizador from '../Controllers/normalizador';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#4f40b5",
        height: normalizador.widthPercentageToDP("20%")
    },
    headerTitleStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: normalizador.widthPercentageToDP('4%')
    },
})
export default styles;