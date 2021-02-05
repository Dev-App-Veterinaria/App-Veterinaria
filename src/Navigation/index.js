import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottomTabNavigator';


export default function Navigation(){
    return (
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
    )
}