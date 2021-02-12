import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import TabInicioNavigator from './tabInicioNavigator';
import TabGlossarioNavigator from './tabGlossarioNavigator';
import styles from './styles';


function BottomTabIcon(){
    return <Image 
        style={{height: 30, width: 30}}
        source={require('../../assets/favicon.png')}/>
}

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return(
        <BottomTab.Navigator
        initialRouteName="Inicio">
        <BottomTab.Screen 
            name="inicio" 
            component={TabInicioNavigator}
            options={{
                tabBarIcon: ()=><BottomTabIcon/>
            }}
        />
        <BottomTab.Screen 
            name="Glossário" 
            component={TabGlossarioNavigator}
            options={{
                tabBarIcon: ()=><BottomTabIcon/>
            }}
        />
    </BottomTab.Navigator>
    )
}



