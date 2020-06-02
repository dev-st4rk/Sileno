import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import friendQRStyle from './friendQR.styles.js'

function friendQr({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return  <View style={{flex: 1, alignItems: 'center', backgroundColor: '#474A5D'}}>
                    <Text style={{top: '50%', color: '#FFF'}}>Requisitando a permissão da câmera...</Text>
                </View>
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
        style={{
            flex: 1,
        }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={()=>{
                            navigation.navigate('Profile');
                            }}>
                    <MaterialIcons name="chevron-left" size={50} color="#fff"/>
                </TouchableOpacity>
                <Text style={styles.topTitle}>Leitor QR</Text>
                <TouchableOpacity onPress={()=>{}}>
                    <MaterialIcons name="insert-photo" size={30} color="#fff"/>              
                </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.qrDesc}>Escaneie o código para adicionar um amigo ou para participar de um evento</Text>
            </View>
            <View style={styles.containerQr}>
                    <View style={styles.Align}>
                        <View style={styles.topLeft}></View>
                        <View style={styles.topRight}></View>
                    </View>
                    <View style={styles.Align}>
                        <View style={styles.bottomLeft}></View>
                        <View style={styles.bottomRight}></View>
                    </View>  
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={()=>{}} style={{alignItems: 'center'}}>
                    <MaterialCommunityIcons name="qrcode" size={35} color="#fff"/>
                    <Text style={styles.bottomSubtitle}>Meu QR Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(friendQRStyle);

export default friendQr;