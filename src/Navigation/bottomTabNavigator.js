import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabInicioNavigator from './tabInicioNavigator';
import TabGlossarioNavigator from './tabGlossarioNavigator';
import TabArtigosNavigator from "./tabArtigosNavigator"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Artigos from "../View/Artigos"


function BottomTabIcon(props){
    let iconName = props.focused ? props.focusedIcon : props.icon;
    return <Icon name={iconName} color={props.color} size={28} />
}


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return(
        <BottomTab.Navigator
        tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#dbdbdb',
                style: {
                    backgroundColor: '#4f40b5',
                }
         }}
            initialRouteName="Inicio">
        <BottomTab.Screen
            name="inicio"
            component={TabInicioNavigator}
            options={{
                tabBarIcon: ({focused, color})=>
                    <BottomTabIcon
                        color={color}
                        focused={focused}
                        icon="home-variant-outline"
                        focusedIcon="home-variant"
                    />
            }}
        />
        <BottomTab.Screen
            name="Glossário"
            component={TabGlossarioNavigator}
            options={{
                tabBarIcon: ({focused, color})=>
                    <BottomTabIcon
                        color={color}
                        focused={focused}
                        icon="book-outline"
                        focusedIcon="book"
                    />
            }}
        />
        <BottomTab.Screen
            name="Artigos"
            component={TabArtigosNavigator}
            options={{
                tabBarIcon: ({focused, color})=>
                    <BottomTabIcon
                        color={color}
                        focused={focused}
                        icon="book-outline"
                        focusedIcon="book"
                    />
            }}
        />
    </BottomTab.Navigator>
    )
}



