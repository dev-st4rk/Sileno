import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



// import { Container } from './styles';

const PartitionFriendList = () => {
    return(
        <View style={styles.containerPartition}>
        <View style={styles.letterContainerList}>
            <Text style={{fontSize: 16, color: '#707070'}}>A</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPartition: {
        width: '90%',
        alignSelf: 'center',
        borderColor: '#707070',
        borderTopWidth: 2,
        marginTop: 10,
        paddingTop: 13
    },
    letterContainerList: {
        position: 'absolute',
        backgroundColor: '#272B35',
        top: -12,
        paddingHorizontal: 10
    }
});


export default PartitionFriendList;