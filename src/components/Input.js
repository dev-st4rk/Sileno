import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = (props) => {
    return (
            <TextInput
                style={[styles.input, props.padding]}
                placeholderTextColor= {props.placeholderTextColor}
                autoCapitalize= {props.autoCapitalize} //options: characters, words, sentences and none.
                keyboardType= {props.keyboardType}
                keyboardAppearance= {props.keyboardAppearance} // IOS only
                selectionColor= {props.selectionColor} //color of cursor
                autoCorrect= {props.autoCorrect}
                textContentType= {props.textContentType}
                dataDetectorTypes={props.dataDetectorTypes}
                defaultValue={props.defaultValue}
                value={props.value}
                onChangeText={props.onChangeText}
                maxLength={props.maxLength}
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
        fontSize: 16,
        color: '#C1C1C1',
        padding: 14,
    }
});
