import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Glossario from '../View/Glossario';
import Informacoes from '../View/Informações';
import styles from './styles';
import InformacoesArtigos from "../View/InformaçõesArtigos";


export default function TabGlossarioNavigator(){
    const { Navigator, Screen } = createStackNavigator()
    return(
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
                  component={Informacoes}
                  options={({ route }) => ({ title: route.params.scientificName})}/>
            <Screen
                name="InformacoesArtigos"
                component={InformacoesArtigos}
                options={{ title: 'Artigo' }}
            />
        </Navigator>
    )
}
