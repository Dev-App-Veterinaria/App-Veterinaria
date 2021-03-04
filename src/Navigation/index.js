import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottomTabNavigator';
import ArtigosProvider from "../Context/contextArtigos";

export default function Navigation(){
    return (
    <NavigationContainer>
        <ArtigosProvider>
            <BottomTabNavigator/>
        </ArtigosProvider>
    </NavigationContainer>
    )
}
