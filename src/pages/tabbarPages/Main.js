    import React, { useState, useEffect } from 'react'; //o useEffect executa algo quando o componente é montado, uma única vez   
    import { StyleSheet, Image, View, ScrollView, Text, FlatList } from 'react-native';
    import MapView, { Marker } from 'react-native-maps';
    import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
    import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';
    import { MaterialIcons } from '@expo/vector-icons';

    import SearchBar from '../../components/searchInput';

    import Mapstyle from '../../MapStyle.json';
    import MapSlide from '../../MapSlide.json';

    const images = [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]

    function Main(){
        const[currentRegion, setCurrentRegion ] = useState(null); //currentRegion = novo estado, setCurrentRegion = metodo para a atualização dos valores

        useEffect(()=>{
            async function loadInitialPosition() { //função para o processo de geolocalização
                const { granted } = await requestPermissionsAsync(); //RPA pede a permição, desestruturado pra trazer o feedback (granted)

                if(granted){ //verifica se o granted retornou true, dizendo que é permitido o uso da localização
                    const { coords } = await getCurrentPositionAsync({ //GCPA puxa a localização atual do usuário, desestruturada paraa trazer apenas as coordenadas (coords)
                        enableHighAccuracy: true, //enableHighAccuracy usa o gps do celular para conseguir uma maior precisão
                    });

                    const { latitude, longitude } = coords; //desestrutura coords para trazer apenas latitude e longitude

                    setCurrentRegion({ //atualizando o state currentRegion
                        latitude, 
                        longitude,
                        latitudeDelta: 0.01, //Deltas controlam o zoom
                        longitudeDelta: 0.01,
                    })
                }
            }
            loadInitialPosition(); //carrega a função assim que o componente é criado
        }, []);

        if (!currentRegion){
            return null;
        }

        return ( 
        <>
            <MapView initialRegion={ currentRegion } style={styles.map} customMapStyle={Mapstyle} showsMyLocationButton={true} showsUserLocation={true} >
                <Marker coordinate={{ latitude: -27.2111164, longitude: -49.6374491 }}>
                    <Image style={styles.avatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
                </Marker>
            </MapView>
            <View style={styles.searchContainer}>
                <SearchBar/>
            </View>
            <View style={styles.extraMap}>
                <TouchableHighlight onPress={() => {}} style={styles.touchable}>
                    <MaterialIcons name="search" size={25} color="#9BAED4"  />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {}} style={styles.touchable2}>
                    <MaterialIcons name="my-location" size={25} color="#9BAED4"  />
                </TouchableHighlight>
            </View>
            <ScrollView pagingEnabled horizontal style={styles.scrollCards} showsHorizontalScrollIndicator={false}>
                {
                    images.map((item, index) => (
                        <View style={styles.cardSlide}>
                            <Image key={index} source={{ uri: item}}
                            style={styles.imagesCard}/>
                            <Text style={styles.cardTitle}>{MapSlide.card.nome}</Text>
                            <Text style={styles.cardSubTitle}>{MapSlide.card.desc}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </>
        );
    }

    const styles = StyleSheet.create({
        map: {
            flex: 1,
            width: "100%",
            height: "100%"
        },
        avatar: {
            width: 54,
            height: 54,
            borderRadius: 18,
        },
        extraMap: {
            position: 'absolute',
            bottom: 270,
            alignSelf: 'flex-end',
            right: 15,
            zIndex: 5,
            flexDirection: 'column',
            backgroundColor: '#111111',
            opacity: 0.81,
            borderRadius: 8,
        },
        touchable: {
            width: 52,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopStartRadius: 8,
            borderTopEndRadius: 8
        },
        touchable2: {
            width: 52,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8
        },
        scrollCards: {
            width: '100%',
            height: 'auto', 
            position: 'absolute',
            bottom: 70,
            alignSelf: 'flex-end',

        },
        cardSlide: {
            width: 142, 
            height: 172, 
            borderRadius: 12, 
            backgroundColor: '#353A50',
            marginHorizontal: 8,
            alignItems: 'stretch'
        },
        imagesCard: {
            width: '100%',
            height: 80,
            resizeMode: 'cover',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12
        },
        cardTitle:{
            color: '#FFF',
            marginHorizontal: 15,
            marginTop: 25
        },
        cardSubTitle:{
            color: '#FFF',
            opacity: 0.56,
            marginHorizontal: 15,
            marginTop: 4
        },
        searchContainer: {
            position: 'absolute',
            top: "6%",
            left: 20,
            right: 20,
            zIndex: 5,
        },
        containerList: {
            backgroundColor: "#454F63",
            opacity: 0.79,
            color: '#ECECEC',
            marginTop: 10,
            borderBottomEndRadius: 25,
            borderBottomStartRadius: 25,
            borderTopStartRadius: 3,
            borderTopEndRadius: 3,
            padding: 15
        },
        listItems: {
            fontSize: 16,
            paddingVertical: 12,
            opacity: 0.60,
            color: '#ECECEC',
        }
    })

    export default Main;