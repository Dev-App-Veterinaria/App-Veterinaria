import { StatusBar } from "expo-status-bar";
import React, { createRef , useState} from 'react';
import { View,TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import styles from './styles';
import poligonos from '../../Components/Dados/poligonos';
import mapStyle from './mapStyle.json';

//Componente inicial do App
export default function (){
    const navigation = useNavigation()
    const mapView = createRef()
    const [textoBusca, setTextoBusca] = useState('');
    const [carregando, setCarregando] = useState(true);

    //Função usada para limitar a área de scroll do usuário, é chamada depois que o mapa é carregado
    const setMapBoundaries = () => {
        mapView.current.setMapBoundaries({latitude: 5.245219, longitude: -32.212305}, {latitude: -31.708548, longitude: -73.958163})
        setCarregando(false);
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
                onPress={() => {navigation.navigate("Doenças", props.nome)}}/>
    }

    let telaDeCarregamento = (
            <View style={{flex:1,  width:"100%",
                        height: "100%",
                        flexDirection:"column",
                        position: "absolute",
                        top: 0,
                        backgroundColor: "#4f40b5"}}>
                <ActivityIndicator style={{flex: 1}} size="large" color="#fff" />
            </View>
            )
    let espera;
    if(carregando){
        espera = telaDeCarregamento;
    }else{
        espera = <></>
    }
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.containerMapa}>
                <MapView
                    initialRegion={{longitude: -54.312460, latitude: -9.50000, latitudeDelta: 40, longitudeDelta: 40}}
                    style={styles.mapa}
                    customMapStyle={mapStyle}
                    minZoomLevel={getMinZoomLevel()}
                    ref={mapView}
                    onMapReady={setMapBoundaries}>
                    <Poligono
                        coordinates={poligonos.ACRE}
                        nome="Acre"/>
                    <Poligono
                        coordinates={poligonos.ALAGOAS}
                        nome="Alagoas"/>
                    <Poligono
                        coordinates={poligonos.AMAPA}
                        nome="Amapá"/>
                    <Poligono
                        coordinates={poligonos.AMAZONAS}
                        nome="Amazonas"/>
                    <Poligono
                        coordinates={poligonos.BAHIA}
                        nome="Bahia"/>
                    <Poligono
                        coordinates={poligonos.CEARA}
                        nome="Ceará"/>
                    <Poligono
                        coordinates={poligonos.DISTRITOFEDERAL}
                        nome="Distrito Federal"/>
                    <Poligono
                        coordinates={poligonos.ESPIRITOSANTO}
                        nome="Espírito Santo"/>
                    <Poligono
                        coordinates={poligonos.GOIAS}
                        nome="Goiás"/>
                    <Poligono
                        coordinates={poligonos.MARANHAO}
                        nome="Maranhão"/>
                    <Poligono
                        coordinates={poligonos.MATOGROSSO}
                        nome="Mato Grosso"/>
                    <Poligono
                        coordinates={poligonos.MATOGROSSODOSUL}
                        nome="Mato Grosso do Sul"/>
                    <Poligono
                        coordinates={poligonos.MINASGERAIS}
                        nome="Minas Gerais"/>
                    <Poligono
                        coordinates={poligonos.PARA}
                        nome="Pará"/>
                    <Poligono
                        coordinates={poligonos.PARAIBA}
                        nome="Paraíba"/>
                    <Poligono
                        coordinates={poligonos.PARANA}
                        nome="Paraná"/>
                    <Poligono
                        coordinates={poligonos.PERNAMBUCO}
                        nome="Pernambuco"/>
                    <Poligono
                        coordinates={poligonos.PIAUI}
                        nome="Piauí"/>
                    <Poligono
                        coordinates={poligonos.RIODEJANEIRO}
                        nome="Rio de Janeiro"/>
                    <Poligono
                        coordinates={poligonos.RIOGRANDEDONORTE}
                        nome="Rio Grande do Norte"/>
                    <Poligono
                        coordinates={poligonos.RIOGRANDEDOSUL}
                        nome="Rio Grande do Sul"/>
                    <Poligono
                        coordinates={poligonos.RONDONIA}
                        nome="Rondônia"/>
                    <Poligono
                        coordinates={poligonos.RORAIMA}
                        nome="Roraima"/>
                    <Poligono
                        coordinates={poligonos.SANTACATARINA}
                        nome="Santa Catarina"/>
                    <Poligono
                        coordinates={poligonos.SAOPAULO}
                        nome="São Paulo"/>
                    <Poligono
                        coordinates={poligonos.SERGIPE}
                        nome="Sergipe"/>
                    <Poligono
                        coordinates={poligonos.TOCANTINS}
                        nome="Tocantins"/>
                </MapView>
                {espera}
                <BarraDeBusca
                    onChangeText={(texto) => {setTextoBusca(texto)}}
                    value={textoBusca}
                    navegacao="Pesquisa"
                    style={{position: "absolute", top: 0}}/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("TelaDeInformações")}>
                    <Icon
                        name="information"
                        size={styles.tamanhoBtn}
                        color="#4f40b5"/>
                </TouchableOpacity>
            </View>
        </View>
        )
}
