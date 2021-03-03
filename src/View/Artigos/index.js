import React from "react"
import {View} from "react-native";
import FlatListArtigos from "../../Components/Visuais/flatListArtigos"
import BarraDeBusca from "../../Components/Visuais/barraDeBusca";

export default function artigos(){
    return(
        <View style={{flex: 1}}>
            <BarraDeBusca
                navegacao="Artigos"
                style={{position: "relative"}}/>
            <FlatListArtigos tela="Artigos"/>
        </View>
    )
}
