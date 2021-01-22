
import React, { createRef } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import styles from './styles';
import poligonos from '../../Components/Dados/poligonos';
import pontosCentrais from '../../Components/Dados/pontosCentrais';
import mapStyle from './mapStyle.json';

//Componente inicial do App
export default function (){
    const navigation = useNavigation()
    const mapView = createRef()

    //Função usada para limitar a área de scroll do usuário, é chamada depois que o mapa é carregado
    const setMapBoundaries = () => {
        mapView.current.setMapBoundaries({latitude: 5.245219, longitude: -32.212305}, {latitude: -31.708548, longitude: -73.958163})
    }

    //Função usada para determinar o nível de zoom do mapa com base na largura da tela
    function getMinZoomLevel() {
        const screenWidth = Dimensions.get('screen').width
        if(screenWidth <= 360){
            return 3.6
        }else if (screenWidth <= 412){
            return 3.8
        }else{
            return 4.4
        }
    }

    //Função para renderizar os polígonos no mapa
    function Poligono(props){
        return <Polygon
                tappable
                strokeColor="white"
                fillColor="#4f40b5"
                coordinates={props.coordinates}
                onPress={() => {navigation.navigate("Doenças", {titulo: props.nome, estado: props.nome})}}/>
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerMapa}>
                <MapView
                    initialRegion={pontosCentrais.BRASIL}
                    style={styles.mapa}
                    customMapStyle={mapStyle}
                    minZoomLevel={getMinZoomLevel()}
                    ref={mapView}
                    onMapReady={setMapBoundaries}>
                    <Poligono
                        coordinates={poligonos.ACRE}
                        nome="Acre"
                        centro={pontosCentrais.ACRE}/>
                    <Poligono
                        coordinates={poligonos.ALAGOAS}
                        nome="Alagoas"
                        centro={pontosCentrais.ALAGOAS}/>
                    <Poligono
                        coordinates={poligonos.AMAPA}
                        nome="Amapá"
                        centro={pontosCentrais.AMAPA}/>
                    <Poligono
                        coordinates={poligonos.AMAZONAS}
                        nome="Amazonas"
                        centro={pontosCentrais.AMAZONAS}/>
                    <Poligono
                        coordinates={poligonos.BAHIA}
                        nome="Bahia"
                        centro={pontosCentrais.BAHIA}/>
                    <Poligono
                        coordinates={poligonos.CEARA}
                        nome="Ceará"
                        centro={pontosCentrais.CEARA}/>
                    <Poligono
                        coordinates={poligonos.DISTRITOFEDERAL}
                        nome="Distrito Federal"
                        centro={pontosCentrais.DISTRITOFEDERAL}/>
                    <Poligono
                        coordinates={poligonos.ESPIRITOSANTO}
                        nome="Espírito Santo"
                        centro={pontosCentrais.ESPIRITOSANTO}/>
                    <Poligono
                        coordinates={poligonos.GOIAS}
                        nome="Goiás"
                        centro={pontosCentrais.GOIAS}/>
                    <Poligono
                        coordinates={poligonos.MARANHAO}
                        nome="Maranhão"
                        centro={pontosCentrais.MARANHAO}/>
                    <Poligono
                        coordinates={poligonos.MATOGROSSO}
                        nome="Mato Grosso"
                        centro={pontosCentrais.MATOGROSSO}/>
                    <Poligono
                        coordinates={poligonos.MATOGROSSODOSUL}
                        nome="Mato Grosso do Sul"
                        centro={pontosCentrais.MATOGROSSODOSUL}/>
                    <Poligono
                        coordinates={poligonos.MINASGERAIS}
                        nome="Minas Gerais"
                        centro={pontosCentrais.MINASGERAIS}/>
                    <Poligono
                        coordinates={poligonos.PARA}
                        nome="Pará"
                        centro={pontosCentrais.PARA}/>
                    <Poligono
                        coordinates={poligonos.PARAIBA}
                        nome="Paraíba"
                        centro={pontosCentrais.PARAIBA}/>
                    <Poligono
                        coordinates={poligonos.PARANA}
                        nome="Paraná"
                        centro={pontosCentrais.PARANA}/>
                    <Poligono
                        coordinates={poligonos.PERNAMBUCO}
                        nome="Pernambuco"
                        centro={pontosCentrais.PERNAMBUCO}/>
                    <Poligono
                        coordinates={poligonos.PIAUI}
                        nome="Piauí"
                        centro={pontosCentrais.PIAUI}/>
                    <Poligono
                        coordinates={poligonos.RIODEJANEIRO}
                        nome="Rio de Janeiro"
                        centro={pontosCentrais.RIODEJANEIRO}/>
                    <Poligono
                        coordinates={poligonos.RIOGRANDEDONORTE}
                        nome="Rio Grande do Norte"
                        centro={pontosCentrais.RIOGRANDEDONORTE}/>
                    <Poligono
                        coordinates={poligonos.RIOGRANDEDOSUL}
                        nome="Rio Grande do Sul"
                        centro={pontosCentrais.RIOGRANDEDOSUL}/>
                    <Poligono
                        coordinates={poligonos.RONDONIA}
                        nome="Rondônia"
                        centro={pontosCentrais.RONDONIA}/>
                    <Poligono
                        coordinates={poligonos.RORAIMA}
                        nome="Roraima"
                        centro={pontosCentrais.RORAIMA}/>
                    <Poligono
                        coordinates={poligonos.SANTACATARINA}
                        nome="Santa Catarina"
                        centro={pontosCentrais.SANTACATARINA}/>
                    <Poligono
                        coordinates={poligonos.SAOPAULO}
                        nome="São Paulo"
                        centro={pontosCentrais.SAOPAULO}/>
                    <Poligono
                        coordinates={poligonos.SERGIPE}
                        nome="Sergipe"
                        centro={pontosCentrais.SERGIPE}/>
                    <Poligono
                        coordinates={poligonos.TOCANTINS}
                        nome="Tocantins"
                        centro={pontosCentrais.TOCANTINS}/>
                </MapView>
                <TouchableOpacity style={styles.btn}>
                    <Icon
                        name="information"
                        size={styles.tamanhoBtn}
                        color="#4f40b5"/>
                </TouchableOpacity>
            </View>
            <BarraDeBusca/>
        </View>
        )
}
