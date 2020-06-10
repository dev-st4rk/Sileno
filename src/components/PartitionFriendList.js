import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import primaryColor from '../visual.json';

// import { Container } from './styles';

const PartitionFriendList = (props) => {
    return(
        <View style={styles.containerPartition}>
             <Text style={{fontSize: 16, color: primaryColor.themeColor}}>{props.letra}</Text>
        <View style={styles.letterContainerList}>
           
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPartition: {
        width: '90%',
        flex:1,
        flexDirection:'column',
        alignSelf: 'center',
        borderColor: primaryColor.themeColor,
        borderTopWidth: 2,
        marginTop: 10,
        paddingTop: 13
    },
    letterContainerList: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: -12,
        paddingHorizontal: 10
    }
});


export default PartitionFriendList;