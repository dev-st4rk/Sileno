import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import userQrStyle from './userQR.styles.js';

export default function userQR({ navigation }) {
  return (
    <View style={styles.Content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('QrCode');}}>
          <MaterialIcons name="chevron-left" size={50} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Código QR</Text>
      </View>
      <View style={styles.qrCard}>
        <Image style={styles.userAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Lucy Lee</Text>
          <Text style={styles.desc}>Photographer, New York</Text>
          <Text style={styles.number}>+55 13 974154802</Text>
        </View>
        <QRCode 
        value="Url com json das infos de nome, desc e numero do usuário"
        color="#f8295f"
        backgroundColor="#1A1829"
        size={200}
        />
        <View style={styles.containerIcons}>
          <TouchableOpacity onPress={()=>{}}>
            <MaterialIcons name="share" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <MaterialIcons name="file-download" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('QrCode');}}>
            <MaterialIcons name="crop-free" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create(userQrStyle);