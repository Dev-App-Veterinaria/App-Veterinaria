import React from "react";
import {View, Image} from "react-native"
import styles from "./styles"

export default function info(){

    return(
        <View style={styles.container}>
            <Image 
                style={styles.imagem}
                source={require('../../../assets/creditos.png')}/>
        </View>
    )
}
