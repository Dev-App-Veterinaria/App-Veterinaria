import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Informacoes from "../Components/Visuais/informacoes"
import FlatListArtigos from "../Components/Visuais/flatListArtigos"

export default function TopTabNavigator(){
    const {Navigator, Screen} = createMaterialTopTabNavigator()
    return(
        <Navigator>
            <Screen name="Dados" component={Informacoes}/>
            <Screen name="Artigos" component={FlatListArtigos}/>
        </Navigator>
    )
}
