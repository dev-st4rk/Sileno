import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default class friendList extends Component {
    render() {
        return (
            <TouchableHighlight 
            onPress={()=>{}} 
            style={{ paddingVertical: 16 }}   
            activeOpacity={0.8}
            underlayColor="#363B54">
                <View style={styles.friendItem}>
                    <Image style={styles.friendAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.friendName}>Jessica Hide</Text>
                        <Text style={styles.friendDesc}>Architect, New York</Text>
                    </View>
                    <Text style={styles.friendStatus}>Online</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    friendItem: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    friendAvatar: {
        height: 40,
        width: 40,
        borderRadius: 15,
    },
    textContainer: {
        alignSelf: 'center',
        right: 40
    },
    friendName: {
        color: '#FFFFFF',
        fontSize: 20
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
        bottom: 5
    }

});