import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Artigos from "../View/Artigos"


export default function TabGlossarioNavigator(){
    const { Navigator, Screen } = createStackNavigator()
    return(
        <Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: 'white'}}>
            <Screen
                name="Artigos"
                component={Artigos}
            />
        </Navigator>
    )
}
