import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Triangle from './triangle';

export default function trianglesComponent() {
    return (
        <View style={{alignSelf: 'center', width: '100%', height: 130, position: 'absolute'}}>
            <View style={{transform: [{ rotate: "99deg" }], right: '66%', bottom: '114%', opacity: 0.41}}>
                <Triangle color='#F8295F' width={273} height={281}/>
            </View>
            <View style={{transform: [{ rotate: "115deg" }], right: '6%', bottom: '294%', opacity: 0.41}}>
                <Triangle color='#F8295F' width={273} height={281}/>
            </View>
            <View style={{transform: [{ rotate: "83deg" }], right: '45%', bottom: '454%', opacity: 0.41}}>
                <Triangle color='#F8295F' width={273} height={281}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
