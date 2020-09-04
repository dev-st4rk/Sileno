import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default function friendList(props){
    return (
        <TouchableHighlight 
        onPress={()=>{}} 
        style={{ paddingVertical: 16 }}   
        activeOpacity={0.8}
        underlayColor="#363B54">
            <View style={styles.friendItem}>
                <Image style={styles.friendAvatar} source={{ uri: props.image }} />
                <View style={styles.textContainer}>
                    <Text style={styles.friendName}>{props.name}</Text>
                    <Text style={styles.friendDesc}>{props.description}</Text>
                </View>
                <Text style={styles.friendStatus}>Online</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    friendItem: {
        width: '100%',
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    friendAvatar: {
        height: 40,
        width: 40,
        borderRadius: 15,
        marginRight: 15,
    },
    textContainer: {
        width: '72%',
        height: '100%',
    },
    friendName: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 20
    },
    friendDesc: {
        color: '#FFFFFF',
        fontSize: 15,
        opacity: 0.7
    },
    friendStatus: {
        color: '#FFFFFF',
        fontSize: 13,
        opacity: 0.7,
        bottom: 5,
    }

});