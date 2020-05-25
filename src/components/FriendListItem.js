import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default function FriendListItem() {
    return (
        <View style={styles.itemContainer}>
            <Image style={styles.friendAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
            <View style={{left: 10}}>
                <Text style={styles.titleItem}>Andrew Richard</Text>
                <Text style={styles.subtitleItem}>Architect, New York</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#131313',
        borderRadius: 9,
        padding: 14,
        marginTop: 13,
        marginBottom: 13
    },
    friendAvatar: {
        height: 40,
        width: 40,
        borderRadius: 13,
    },
    titleItem: {
        fontSize: 15,
        color: '#FDFEFF'
    },
    subtitleItem: {
        fontSize: 10,
        color: '#FFF',
        opacity: 0.56,
    }
});