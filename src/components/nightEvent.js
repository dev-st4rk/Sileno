import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const nightEvent = () => {
  return(
    <View style={styles.eventComponent}>
      <Image style={styles.imageEvent} source={{uri: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
      <View style={styles.eventComponentText}>
        <Text style={styles.eventTitle}>Festa da Anny 🔥</Text>
        <Text style={styles.eventSubTitle}>1735 Vine St, Los Angeles,CA 90028, United States </Text>
      </View>
      <TouchableOpacity style={{left: '45%'}}>
        <MaterialIcons style={{top: -10}} name="close" size={22} color="#585858"/>
      </TouchableOpacity>
    </View>
  );
}

export default nightEvent;

const styles = StyleSheet.create({
  eventComponent: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#050714',
    borderRadius: 9,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageEvent: {
    height: 40,
    width: 40,
    borderRadius: 12,
    marginLeft: 10
  },
  eventComponentText: {
    marginLeft: 10
  },
  eventTitle: {
    color: '#fff',
    fontSize: 14,
  },
  eventSubTitle: {
    color: '#585858',
    fontSize: 10,
    marginLeft: 1,
    marginTop: 1,
  },
});