import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Mapa from '../View/Mapa';
import Doencas from '../View/Doenças';
import TelaDeInformacoes from "../View/TelaDeInformações";
import InformacoesArtigos from "../View/InformaçõesArtigos";
import TopTabNavigator from "./topTabNavigator";
import BuscaProvider from "../Context/contextBusca";
import DadosProvider from "../Context/contextDoencas";
import styles from './styles';
import Glossario from "../View/Glossario";

export default function TabInicioNavigator() {
    const {Navigator, Screen} = createStackNavigator()
    return (
        <DadosProvider>
            <BuscaProvider>
                <Navigator
                    screenOptions={{
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTintColor: 'white'}}>
                    <Screen
                        name="Parasitour"
                        component={Mapa}/>
                    <Screen
                        name="Doenças"
                        component={Doencas}
                        options={({ route }) => ({ title: route.params })}/>
                    <Screen
                        name="Informações"
                        component={TopTabNavigator}
                        options={({ route }) => ({ title: route.params })}/>
                    <Screen
                        name="Pesquisa"
                        component={Glossario}/>
                    <Screen
                        name={"TelaDeInformações"}
                        component={TelaDeInformacoes}
                        options={() => ({title: "Informações"})}/>
                </Navigator>
            </BuscaProvider>
        </DadosProvider>

    )
}
