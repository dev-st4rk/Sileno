import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Picker }
from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import InputComponent from '../../components/Input';
<<<<<<< HEAD:src/pages/register/register.js
import registerStyle from './register.styles.js';
=======

>>>>>>> register-process:src/pages/RegisterProcess/Register.js
export default function Register({navigation}) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get('https://country-cities.herokuapp.com/api/v0.1/countries/codes')
            .then(res=>{
                setCountries(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }, [])
    const [selectedValue, setSelectedValue] = useState(null);
    const [number, setNumber] = useState('');
    const [alertVisible, setAlertVisible] = useState(null);
    // create state hidden or visible for view using react hooks. Basically you need pass two objects, the first object is 
    //the final result or the response of your call, and the last object is where you pass the conditions, then useState for
    //literally use the state, and the initial state of your component

    return (
        <View style={styles.Content}>
            <KeyboardAvoidingView style={styles.containerForm} behavior="position">
                <View style={styles.containerLogo}/>
                <Text style={styles.topDesc}>
                    O Sileno enviará um SMS para verificar o seu número de telefone. 
                    Insira o código de país e o número do seu telefone:
                </Text>
                <View style={styles.picker}>
                <Picker
                    mode='dialog'
                    selectedValue={selectedValue}
                    style={{ height: 20, width: '100%', color: '#B1B1B1'}}
                    itemStyle={{color: '#B1B1B1'}}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {countries.map(country => (
                        <Picker.Item label={country.name} value={country.dial_code} />
                    ))}
                </Picker>  
                <MaterialIcons name="expand-more" size={22} color="#A7A7A7" style={styles.iconPicker}/>
                </View>
                <View style={styles.containerTwoInputs}>
                    <View style={styles.fakeInput}>
                        <Text style={styles.fakePlaceholder}>
                            {selectedValue}
                        </Text>
                    </View>
                    <View style={{width: '77%'}}>  
                        <InputComponent 
                        placeholderTextColor="#FFF" 
                        autoCapitalize="none" //options: characters, words, sentences and none.
                        keyboardType="number-pad" 
                        keyboardAppearance="dark" // IOS only
                        selectionColor="#fff" //color of cursor
                        autoCorrect={false}
                        textContentType="telephoneNumber"
                        dataDetectorTypes='phoneNumber'
                        value={number}
                        onChangeText={setNumber}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => {setAlertVisible(true);}}>
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
                        <Text style={[styles.textCard, {color: '#FFF'}]}>{selectedValue+' '+number}</Text>
                        <View>
                            <Text style={styles.textCard}>Este número está correto, ou deseja editar?</Text>
                        </View>
                        <View style={styles.containerButtonsCard}>
                            <TouchableOpacity  onPress={() => { setAlertVisible(false); }} style={{padding: 3}}>
                                <Text style={[styles.textCard, {color: '#3ACCE1', fontWeight: 'bold'}]}>EDITAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ navigation.navigate('Verification'); }}  style={{padding: 3}}>
                                <Text style={[styles.textCard, {color: '#3ACCE1', fontWeight: 'bold'}]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            : null}
        </View>
    );
}

<<<<<<< HEAD:src/pages/register/register.js
const styles = StyleSheet.create(registerStyle);
=======
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
    picker: {
        width: '100%',
        height: 48,
        backgroundColor: '#191824',
        borderRadius: 5,
        fontSize: 20,
        color: '#C1C1C1',
        padding: 14,
        marginTop: '12%',
    },
    iconPicker: {
        position: 'absolute',
        left: '92%',
        top: 12
    },
    containerTwoInputs:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%'
    },
    fakeInput: {
        width: '22%',
        height: 48,
        backgroundColor: '#191824',
        borderRadius: 5,
        fontSize: 20,
        color: '#C1C1C1',
        padding: 14
    },
    fakePlaceholder:{
        fontSize: 14,
        color: '#C1C1C1',
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
>>>>>>> register-process:src/pages/RegisterProcess/Register.js
