import {Dimensions, PixelRatio} from "react-native";

//Módulo que retorna um valor numérico tendo como escala a largura ou altura da tela.
//As funções são usadas para textos ou outros campos que não suportam a estilização do tamanho por porcentagem.

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

export default {
    widthPercentageToDP,
    heightPercentageToDP
}
