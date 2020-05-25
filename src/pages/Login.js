import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


export default function Login({navigation}) {
    return (
        <View style={styles.Content}>
            {/* command to elevate the view */}
            <KeyboardAvoidingView style={styles.containerForm} behavior="position">
                <View style={styles.containerLogo}>
                </View>
                {/* ======= input Email ======= */}
                <View style={styles.iconTitle}>
                    <MaterialIcons name="email" size={20} color="#C1C1C1" style={styles.Icon} />
                    <Text style={styles.titleForm}>Email</Text>
                </View>
                <TextInput
                style={styles.input}
                placeholderTextColor="#FFF" 
                autoCapitalize="none" //options: characters, words, sentences and none.
                keyboardType="email-address" 
                keyboardAppearance="dark" // IOS only
                selectionColor="#fff" //color of cursor
                autoCorrect={false}
                textContentType="emailAddress"/>
                {/* ======= input Password ======= */}
                <View style={styles.iconTitle}>
                    <MaterialIcons name="lock" size={20} color="#C1C1C1" style={styles.Icon} />
                    <Text style={styles.titleForm}>Senha</Text>
                </View>
                <TextInput
                style={styles.input}
                placeholderTextColor="#FFF" 
                autoCapitalize="none" //options: characters, words, sentences and none.
                keyboardType="default" 
                keyboardAppearance="dark" // IOS only
                selectionColor="#fff" //color of cursor
                autoCorrect={false}
                secureTextEntry={true}/>
            </KeyboardAvoidingView>
            {/* ======= button login ======= */}
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.titleButton}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ navigation.navigate('Main'); }}>
                    <View style={styles.button}>
                        <Text style={{color: '#FFF', fontSize: 16}}>ENTRAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* ======= container with the buttons of social login ======= */}
            <View style={styles.containerBottom}>
                <View style={styles.containerSocialButtons}>
                    <TouchableOpacity style={styles.buttonSocialF}>
                        <Ionicons name="logo-facebook" size={25} color="#fff"/>
                        <Text style={{color: '#FFF'}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocialG}>
                        <Ionicons name="logo-google" size={25} color="#fff"/>
                        <Text style={{color: '#FFF'}}>Google</Text>
                    </TouchableOpacity>
                </View>
                {/* ======= container with the text/link for sign up ======= */}
                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: '6%'}}>
                    <Text style={styles.subTitle}>Não possui uma conta? </Text>
                    <TouchableOpacity>
                        <Text style={styles.subTitle, {color: '#FFF'}}>Inscreva-se</Text>
                    </TouchableOpacity>
                </View>
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
    containerLogo: {
        backgroundColor: '#000',
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    containerForm: {
        width: '80%',
        top: '10%',
    },
    iconTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        left: 2,
        marginTop: 25
    },
    Icon: {
    },
    titleForm: {
        color: '#C1C1C1',
        fontSize: 18,
        left: 7,
    },
    input: {
        width: '100%',
        height: 48,
        backgroundColor: '#191824',
        borderRadius: 5,
        fontSize: 20,
        color: '#C1C1C1',
        padding: 14
    },
    inputEmail: {
        top: '6%'
    },
    inputSenha: {
        top: '10%'
    },
    containerButton: {
        top: '15%',
        width: '100%'
    },
    titleButton: {
        fontSize: 16,
        color: '#FFF',
        alignSelf: 'flex-end',
        bottom: '70%',
        right: 70
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
    containerBottom: {
        top: '18%'
    },
    containerSocialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonSocialF: {
        backgroundColor: '#3B5998',
        width: '40%',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    buttonSocialF: {
        backgroundColor: '#3B5998',
        width: '40%',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    buttonSocialG: {
        backgroundColor: '#F14336',
        width: '40%',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },
    subTitle: {
        fontSize: 14,
        color: '#C1C1C1',
    }
});