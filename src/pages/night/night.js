import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import nightStyle from './night.styles.js';

const routeTest = () => {
    return (
        <View style={{    borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            flex: 1, alignItems: 'center',justifyContent: 'space-around'}}>
            <Text>oi</Text>
        </View>
    )
}

export default routeTest

const styles = StyleSheet.create(nightStyle)
