import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NightSatiro = () => {
  return(
    <TouchableOpacity style={styles.containerFriend}>
      <View style={styles.alignContent}>
        <Image style={styles.friendImage} source={{uri: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}></Image>
        <Text style={styles.friendName}>Sarah Wolf</Text>
      </View>
    </TouchableOpacity>
  );
}

export default NightSatiro;

const styles = StyleSheet.create({
  containerFriend: {
    width: 92,
    height: 98,
    backgroundColor: '#050714',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8
  },
  alignContent: {
    alignItems: 'center'
  },
  friendImage: {
    width: 55,
    height: 55,
    borderRadius: 18,
  },
  friendName: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4
  }
})

