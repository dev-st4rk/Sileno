import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default class cmponents extends Component {
    render() {
        return(
            <View>
                <TextInput
                style={styles.searchInput}
                placeholder="Buscar localizações, Sátiros..."
                placeholderTextColor="#FFF"
                autoCapitalize="words"
                autoCorrect={false}>
                </TextInput>
                <MaterialIcons name="search" size={30} color="#ECECEC" style={styles.Icon} />
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: "#050714",
        opacity: 0.79,
        color: '#ECECEC',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    Icon: {
        elevation: 2,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 15,
        top: 9
    }
});