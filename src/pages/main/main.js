import React, { useState, useEffect } from "react"; //o useEffect executa algo quando o componente é montado, uma única vez
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { TouchableHighlight, TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import primaryColor from '../../visual.json';
import SearchBar from "../../components/searchInput";
import Icon from "react-native-vector-icons/FontAwesome";
import Mapstyle from "../../components/mapbox/MapStyle.json";
import MapSlide from "../../components/mapbox/MapSlide.json";
import mapboxModule from "../../components/mapbox/controller.js";
import satiros from "../../components/satiros/list.js";
import mainStyle from "./main.styles.js";
var styleJaja = mainStyle;
var map;
const images = [
  "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];
var userCoords;

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null); //currentRegion = novo estado, setCurrentRegion = metodo para a atualização dos valores
  const [opacity, setOpacity] = useState(1);
  function mapActive(stat) {
    if (stat) setOpacity(0.1);
    else {
        setOpacity(1)
    }
  }
  useEffect(() => {
    async function loadInitialPosition() {
      //função para o processo de geolocalização
      const { granted } = await requestPermissionsAsync(); //RPA pede a permição, desestruturado pra trazer o feedback (granted)

      if (granted) {
        //verifica se o granted retornou true, dizendo que é permitido o uso da localização
        const { coords } = await getCurrentPositionAsync({
          //GCPA puxa a localização atual do usuário, desestruturada paraa trazer apenas as coordenadas (coords)
          enableHighAccuracy: true, //enableHighAccuracy usa o gps do celular para conseguir uma maior precisão
        });

        const { latitude, longitude } = coords; //desestrutura coords para trazer apenas latitude e longitude
        userCoords = coords;
        setCurrentRegion({
          //atualizando o state currentRegion
          latitude,
          longitude,
          latitudeDelta: 0.01, //Deltas controlam o zoom
          longitudeDelta: 0.01,
        });
      }
    }

    loadInitialPosition();
  }, []);
  if (!currentRegion) {
    return null;
  }
  return (
    <>
      <MapView
        ref={(mapView) => {
          map = mapView;
        }}
        onRegionChange={() => {
          mapActive(true);
        }}
        onRegionChangeComplete={() => {
          mapActive(false);
        }}
        initialRegion={currentRegion}
        style={styles.map}
        customMapStyle={Mapstyle}
        showsMyLocationButton={true}
        showsUserLocation={true}
      >
        {satiros.localizarSatiros()}
      </MapView>
      <View style={[styles.searchContainer, { opacity: opacity }]}>
        <SearchBar />
      </View>
      <View style={[styles.extraMap, { opacity: opacity }]}>
        <TouchableHighlight onPress={() => {}} style={styles.touchable}>
        <Icon
                  name="search"
                  size={20}
                  color={primaryColor.themeColor}
                  style={{
                    textShadowColor: primaryColor.themeColor,
                    shadowOpacity: 10,
                    textShadowRadius: 10,
                    textShadowOffset: { width: 0, height: 0 },
                  }}
                />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            mapboxModule.centralizarLocalizacao(
              map,
              userCoords.latitude,
              userCoords.longitude,
              60
            );
          }}
          style={styles.touchable2}
        >
          <Icon
                  name="location-arrow"
                  size={20}
                  color={primaryColor.themeColor}
                  style={{
                    textShadowColor: primaryColor.themeColor,
                    shadowOpacity: 10,
                    textShadowRadius: 10,
                    textShadowOffset: { width: 0, height: 0 },
                  }}
                />
        </TouchableHighlight>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        style={[styles.scrollCards, { opacity: opacity }]}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.cardSlide}
            onPress={() => {
              mapboxModule.centralizarLocalizacao(
                map,
                -23.94817,
                -46.392501,
                60
              );
            }}
          >
            <Image
              key={index}
              source={{ uri: item }}
              style={styles.imagesCard}
            />
            <Text style={styles.cardTitle}>{MapSlide.card.nome}</Text>
            <Text style={styles.cardSubTitle}>{MapSlide.card.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create(styleJaja);

export default Main;
