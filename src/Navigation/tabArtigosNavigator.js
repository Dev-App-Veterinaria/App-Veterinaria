import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Artigos from "../View/Artigos";
import InformacoesArtigos from "../View/InformaçõesArtigos";
import BuscaProvider from "../Context/contextBusca";
import DadosProvider from "../Context/contextDoencas";


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
                        name="Artigos"
                        component={Artigos}
                    />
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
