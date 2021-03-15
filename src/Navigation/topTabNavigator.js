import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Informacoes from "../Components/Visuais/informacoes";
import FlatListArtigos from "../Components/Visuais/flatListArtigos";
import styles from "./styles";

export default function TopTabNavigator(){
    const {Navigator, Screen} = createMaterialTopTabNavigator()
    return(
        <Navigator
            tabBarOptions={{
                tabStyle: {backgroundColor: "#4f40b5", elevation: 5},
                activeTintColor: "#fff",
                inactiveTintColor: '#cccccc',
                labelStyle: {
                    textTransform: 'none',
                    fontWeight: "bold"
                }
                }}>
            <Screen name="Informações" component={Informacoes}/>
            <Screen name="Artigos Relacionados" component={FlatListArtigos}/>
        </Navigator>
    )
}
