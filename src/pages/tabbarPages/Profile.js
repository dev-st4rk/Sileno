import React, { useState }from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView,
    TouchableHighlight, Modal, TouchableOpacityBase } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../../components/searchInput';
import Friend from '../../components/friendList';

import BackgroundImage from '../../assets/Background.png';

function Profile({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);

    return <View style={styles.Content}> 
                <Image source={BackgroundImage} style={styles.background}/>
                <View  style={styles.topicons}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('QrCode');
                            }}>
                            <MaterialIcons name="crop-free" size={35} color="#fff"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <MaterialIcons name="more-vert" size={35} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerUser}>
                        <Image style={styles.userAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
                        <TouchableOpacity onPress={() => { setModalVisible(true);}} style={styles.addImage}>
                            <MaterialIcons name="add-circle" size={35} color="#fff"/>
                        </TouchableOpacity>
                    <View style={styles.containerTextUser}>
                        <Text style={styles.nameUser}>Lucy Lee</Text>
                        <Text style={styles.descUser}>Photographer, New York</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <TouchableOpacity style={styles.infoGroup}>
                            <Text style={styles.infoNum}>11</Text>
                            <Text style={styles.infoName}>Sátiros</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{ navigation.navigate('Friends'); }} style={styles.infoGroup}>
                            <Text style={styles.infoNum}>145</Text>
                            <Text style={styles.infoName}>Amigos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}} style={styles.infoGroup}>
                            <Text style={styles.infoNum}>10</Text>
                            <Text style={styles.infoName}>Bloq.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.cardImage}>
                        <View style={styles.modalView}>
                            {/* ////////////////////Tirar Foto//////////////////// */}
                            <TouchableHighlight onPress={()=>{}} style={styles.listItem} activeOpacity={0.8} 
                            underlayColor="#61657B">
                                <View style={styles.containerImageOptions}>
                                    <Text style={styles.TextImageOptions}>Tirar Foto</Text>
                                </View>
                            </TouchableHighlight>
                            {/* ////////////////////Selecionar da Galeria//////////////////// */}
                            <TouchableHighlight onPress={()=>{}} style={styles.listItem} activeOpacity={0.8} 
                            underlayColor="#61657B">
                                <View style={styles.containerImageOptions}>
                                    <Text style={styles.TextImageOptions}>Selecionar da Galeria</Text>
                                </View>
                            </TouchableHighlight>
                            {/* ////////////////////Cancelar//////////////////// */}
                            <TouchableHighlight onPress={() => {setModalVisible(!modalVisible);}}
                            style={styles.listItem} activeOpacity={0.8} underlayColor="#61657B">
                                <View style={styles.containerImageOptions}>
                                    <Text style={styles.TextImageOptions}>Cancelar</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <View style={styles.card}>
                    <View style={styles.searchContainer}>
                        <SearchBar/>
                    </View>
                    <View style={styles.containerScroll}>
                        <ScrollView >
                            <Friend/>
                            <Friend/>
                            <Friend/>
                            <Friend/>
                            <Friend/>
                        </ScrollView>
                    </View> 
                </View>
            </View>
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        backgroundColor: '#474A5D',
    },
    topicons: {
        position: 'absolute',
        width: '100%',
        top: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    containerUser: {
        position: 'absolute',
        alignSelf: 'center',
        top: "14%",
    },
    containerAvatar: {
        width: 60,
    },
    userAvatar:{
        width: 100,
        height: 100,
        borderRadius: 60,
        alignSelf: 'center'
    },
    addImage: {
        position: 'absolute',
        width: 35,
        right: 70,
        top: 75,
    },
    containerTextUser: {
        alignItems: 'center',
        top: 10
    },
    nameUser: {
        color: '#FFFFFF',
        fontSize: 20
    },
    descUser: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7
    },
    userInfo: {
        width: 250,
        top: 20,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    infoGroup: {
        alignItems: 'center'
    },
    infoNum: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    infoName: {
        fontSize: 14,
        color: '#FFFFFF',
        opacity: 0.7
    },
    card: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        backgroundColor: '#2A2E43',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    searchContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
    },
    containerScroll: {
        height: '56%',
        top: '25%'
    },
    cardImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: 230,
        height: 175,
        bottom: 154,
        backgroundColor: '#363B54',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    listItem: {
        width: '100%',
        height: '32%',
        borderRadius: 5,
    },
    containerImageOptions: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    TextImageOptions: {
        color: '#FFFFFF',
        fontSize: 18,
        opacity: 0.7
    },
})
export default Profile;