import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Picker }
from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import InputComponent from '../../components/Input';
import Triangles from '../../components/trianglesComponent';
import registerStyle from './register.styles';

import Logo from '../../components/sileno';

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
                <Triangles/>
                <Logo color='#F8295F' size={130} style={styles.containerLogo}/>
                <View style={{marginTop: '12%'}}>
                    <View style={{flexDirection: 'row', alignSelf: 'center',  width: '66%'}}>
                        <Text style={styles.topDesc}>
                            Preparado para o 
                        </Text>
                        <Text style={[styles.topDesc, {marginLeft: 5, color: '#F8295F'}]}>
                            Sileno
                        </Text>
                        <Text style={styles.topDesc}>
                            ?
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <Text style={styles.topDesc}>
                        Para criar sua conta, usaremos seu número de telefone, tudo bem?
                    </Text>
                    <Text style={styles.topDesc}>
                        Digita ele aí pra gente!
                    </Text>
                </View>
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
            <Text style={styles.buttonDesc}>
                *Tarifas de SMS de sua operadora podem ser aplicadas
            </Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => {setAlertVisible(true);}}>
                    <View style={styles.button}>
                        <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>Tudo pronto, verificar!</Text>
                    </View>
                </TouchableOpacity>
            </View>
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

const styles = StyleSheet.create(registerStyle);
