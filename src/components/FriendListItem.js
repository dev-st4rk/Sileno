import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default function FriendListItem(props) {
    return (
        <View style={styles.itemContainer}>
            <Image style={styles.friendAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
            <View style={{left: 10}}>
                <Text style={styles.titleItem}>{props.name}</Text>
                <Text style={styles.subtitleItem}>{props.description}</Text>
            </View>
            <Text style={styles.status}>{props.status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#050714',
        borderRadius: 9,
        padding: 14,
        marginVertical: 13
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
    },
    status: {
        fontSize: 12,
        color: '#FFF',
        opacity: 0.56,
        marginLeft: '44%',
        bottom: 12
    }
});