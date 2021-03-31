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
import {Image} from "react-native";
import normalizador from "../Controllers/normalizador";

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
                        component={Mapa}
                        options={{
                            headerTitle: () => (<Image
                                    style={{ width: normalizador.widthPercentageToDP('34%'), height: normalizador.widthPercentageToDP('9%') }}
                                    source={require('../../assets/logotipo.png')}
                                    />)
                        }}/>
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
