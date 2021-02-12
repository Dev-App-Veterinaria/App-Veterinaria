import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mapa from '../View/Mapa';
import Glossario from '../View/Glossario';
import Doencas from '../View/Doenças';
import Informacoes from '../View/Informações';
import styles from './styles';

export default function TabInicioNavigator(){
    const { Navigator, Screen } = createStackNavigator()
    return (
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
                  component={Informacoes}
                  options={({ route }) => ({ title: route.params.scientificName})}/>
                <Screen
                  name="Glossário"
                  component={Glossario}
                  options={({route})=>({title:route.params.tipoDeBusca === undefined ?"Glossário" : route.params.tipoDeBusca})}/>
        </Navigator>
    )
}