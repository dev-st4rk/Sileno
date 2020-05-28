import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import InputComponent from '../components/Input';

export default function Register({navigation}) {
    // create state hidden or visible for view using react hooks. Basically you need pass two objects, the first object is 
    //the final result or the response of your call, and the last object is where you pass the conditions, then useState for
    //literally use the state, and the initial state of your component
const [alertVisible, setAlertVisible] = useState(null); 

    return (
        <View style={styles.Content}>
            <KeyboardAvoidingView style={styles.containerForm} behavior="position">
                <View style={styles.containerLogo}/>
                <Text style={[styles.topDesc, {marginTop: '12%'}]}>
                Aguardando para detectar automaticamente</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.topDesc}> um SMS enviado para</Text>
                    <Text style={styles.topDesc}> +55 13 974154802. </Text>
                </View>
                <TouchableOpacity>
                    <Text style={[styles.topDesc, {color: '#3ACCE1'}]}>Número errado?</Text>
                </TouchableOpacity>
                <Text style={[styles.topDesc, {marginBottom: 6, marginTop: '8%'}]}>Digite o código de 6 dígitos</Text>
                <View>
                    <InputComponent selectionColor="#fff"/>
                    <TouchableOpacity style={styles.buttonInput}>
                        <MaterialIcons name="arrow-forward" size={24} color="#A7A7A7"/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <View style={{width: '80%',flexDirection: 'row', top: '26%', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <MaterialIcons name="message" size={22} color="#A7A7A7"/>
                    <Text style={[styles.topDesc, {marginLeft: 10}]}>Reenviar SMS</Text>
                </TouchableOpacity>
                <Text style={[styles.topDesc, {fontSize: 14}]}>1:10</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        backgroundColor: '#272B35',
        alignItems: 'center',
        flexDirection: 'column'
    },
    containerForm: {
        width: '80%',
        top: '10%',
    },
    containerLogo: {
        backgroundColor: '#000',
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
    topDesc: {
        color: '#A7A7A7',
        fontSize: 16,
    },
    buttonInput: {
        position: 'absolute',
        height: 48,
        width: 62,
        alignSelf: 'flex-end',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#111',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});