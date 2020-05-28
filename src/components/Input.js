import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = () => {
    return (
            <TextInput
                style={styles.input}
                // placeholderTextColor="#FFF" 
                // autoCapitalize="none" //options: characters, words, sentences and none.
                // keyboardType="email-address" 
                // keyboardAppearance="dark" // IOS only
                // selectionColor="#fff" //color of cursor
                // autoCorrect={false}
                // textContentType="emailAddress"
            />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        backgroundColor: '#191824',
        borderRadius: 5,
        fontSize: 20,
        color: '#C1C1C1',
        padding: 14
    }
});
