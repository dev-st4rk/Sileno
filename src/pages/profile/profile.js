import React, { useState }from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView,
    TouchableHighlight, Modal, TouchableOpacityBase } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../../components/searchInput';
import Friend from '../../components/friendList';

import BackgroundImage from '../../assets/Background.png';
import profileStyle from './profile.styles.js';
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

const styles = StyleSheet.create(profileStyle)
export default Profile;