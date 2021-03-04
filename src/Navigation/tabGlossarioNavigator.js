import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Glossario from '../View/Glossario';
import InformacoesArtigos from '../View/InformaçõesArtigos';
import styles from './styles';
import BuscaProvider from "../Context/contextBusca";
import DadosProvider from "../Context/contextDoencas";
import TopTabNavigator from "./topTabNavigator";


export default function TabGlossarioNavigator(){
    const { Navigator, Screen } = createStackNavigator()
    return(
        <DadosProvider>
            <BuscaProvider>
                <Navigator
                    screenOptions={{
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTintColor: 'white'}}>
                    <Screen
                        name="Glossário"
                        component={Glossario}
                    />
                    <Screen
                        name="Informações"
                        component={TopTabNavigator}/>
                    <Screen
                        name="InformacoesArtigos"
                        component={InformacoesArtigos}
                        options={{ title: 'Artigo' }}
                    />
                </Navigator>
            </BuscaProvider>
        </DadosProvider>
    )
}
