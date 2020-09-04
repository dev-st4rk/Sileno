import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import SearchBar from '../../components/searchInput';

import whiteStyle from './white.styles.js'; // A little racist
const styles = StyleSheet.create(whiteStyle);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.Content}>
        <View style={styles.Header}>
          <Text style={styles.pageTitle}>Bloquear aplicativos</Text>
          <MaterialIcons name="view-list" size={30} color="white" />
        </View>
        <View style={styles.searchContainer}>
          <SearchBar/>
        </View>
      </View>
    );
  }
}

