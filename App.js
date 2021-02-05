import React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Doencas from './src/View/Doenças';
import Informacoes from './src/View/Informações'
import Mapa from './src/View/Mapa';
import normalizador from './src/Controllers/normalizador';
import Glossario from './src/View/Glossario';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#4f40b5",
        height: normalizador.widthPercentageToDP("20%")
    },
    headerTitleStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: normalizador.widthPercentageToDP('4%')
    },
})

export default function App() {
  const { Navigator, Screen } = createStackNavigator()

  return (
      <NavigationContainer>
          <Navigator
              screenOptions={{
                  headerStyle: styles.headerStyle,
                  headerTitleStyle: styles.headerTitleStyle,
                  headerTintColor: 'white'}}>
              <Screen
                  name="Parasitour" component={Mapa}/>
              <Screen
                  name="Doenças"
                  component={Doencas}
                  options={({ route }) => ({ title: route.params })}/>
              <Screen
                  name="Informações"
                  component={Informacoes}
                  options={({ route }) => ({ title: route.params.scientificName})}/>
              <Screen
                  name="Glossario"
                  component={Glossario}
                  options={({ route }) => ({ title: route.params.nome})}/>
          </Navigator>
      </NavigationContainer>
  );
}

