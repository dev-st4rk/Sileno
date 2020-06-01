import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';
import backleno from '../services/backlenoService';
import * as SMS from 'expo-sms';

import InputComponent from '../components/Input';

export default function Register({navigation}) {
    function sendSMS(phone, message) {
        SMS.sendSMSAsync(phone, message);
    }

    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            backleno.get('/usuarios').then(({data}) => {
                setUsersData(data);
            });
        }
        fetchData();
    }, [])

    // create state hidden or visible for view using react hooks. Basically you need pass two objects, the first object is 
    //the final result or the response of your call, and the last object is where you pass the conditions, then useState for
    //literally use the state, and the initial state of your component
    const [alertVisible, setAlertVisible] = useState(null); 

    return (
        <View style={styles.Content}>
            <KeyboardAvoidingView style={styles.containerForm} behavior="position">
                <View style={styles.containerLogo}/>
                <Text style={styles.topDesc}>
                    O Sileno enviará um SMS para verificar o seu número de telefone. 
                    Insira o código de país e o número do seu telefone:
                </Text>
                <View style={{marginTop: '12%'}}>  
                        <InputComponent/>
                    </View>
                <View style={styles.containerTwoInputs}>
                    <View style={{width: '20%'}}>  
                        <InputComponent/>
                    </View>
                    <View style={{width: '79%'}}>  
                        <InputComponent/>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => { setAlertVisible(true); }}>
                    <View style={styles.button}>
                        <Text style={{color: '#FFF', fontSize: 16}}>VERIFICAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={[styles.topDesc, {color: '#757575', width: '70%', alignItems: 'center',
            marginTop: '30%'}]}>
                Tarifas de SMS de sua operadora podem ser aplicadas
            </Text>
            {/* ===================filter and card=================== */}
            {alertVisible ? 
                <>
                    <View style={styles.filter}/>
                    <View style={styles.alertCard}>
                        <Text style={styles.textCard}>Nós verificaremos o número:</Text>
                        <Text style={[styles.textCard, {color: '#FFF'}]}>+55 13 974154802</Text>
                        <View>
                            <Text style={styles.textCard}>Este número está correto, ou deseja editar?</Text>
                        </View>
                        <View style={styles.containerButtonsCard}>
                            <TouchableOpacity  onPress={() => { setAlertVisible(false); }} style={{padding: 3}}>
                                <Text style={[styles.textCard, {color: '#3ACCE1', fontWeight: 'bold'}]}>EDITAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ sendSMS('+55 13 974154802', 'teste') }}  style={{padding: 3}}>
                                <Text style={[styles.textCard, {color: '#3ACCE1', fontWeight: 'bold'}]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            : null}
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
        fontSize: 18,
        marginTop: '12%'
    },
    containerTwoInputs:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%'
    },
    containerButton: {
        top: '13%',
        width: '100%'
    },
    button: {
        width: '58%',
        height: 47,
        backgroundColor: '#111',
        justifyContent: 'space-around',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    filter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.52,
    },

    alertCard: {
        position: 'absolute',
        width: '80%',
        height: '28%',
        top: '34%',
        padding: 22,
        borderRadius: 5,
        justifyContent: 'space-between',
        backgroundColor: '#272B35',
        shadowColor: "#000",
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 5
    },
    textCard: {
        fontSize: 16,
        color: '#838595'
    },
    containerButtonsCard: {
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});