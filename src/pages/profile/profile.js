import React, { useState }from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView,
TouchableHighlight, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../../components/searchInput';
import Friend from '../../components/friendList';

import BackgroundImage from '../../assets/Background.png';
import profileStyle from './profile.styles.js';

import users from '../../../temp/users.json';

function Profile({ navigation }){
  const [modalVisible, setModalVisible] = useState(false);

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.Content}> 
			<Image source={{uri: 'https://images.unsplash.com/photo-1559060680-36abfac01944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=60'}} style={{width: '100%', height: '60%'}}/>
			<View  style={styles.topicons}>
				<View style={{flexDirection: 'row'}}>
						<TouchableOpacity onPress={()=>{
								navigation.navigate('QrCode');
								}}>
								<MaterialIcons name="crop-free" size={35} color="#fff"/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{}}>
								<MaterialIcons name="more-vert" size={35} color="#fff"/>
						</TouchableOpacity>
				</View>
			</View>
			<View style={styles.containerUser}>
				<Image style={styles.userAvatar} source={{ uri: 'https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
				<TouchableOpacity onPress={() => { setModalVisible(true);}} style={styles.addImage}>
					<MaterialIcons name="add-circle" size={35} color="#fff"/>
				</TouchableOpacity>
				<View style={styles.containerTextUser}>
					<Text style={styles.nameUser}>Lucy Lee</Text>
					<Text style={styles.descUser}>Photographer, New York</Text>
				</View>
				<View style={styles.userInfo}>
					<TouchableOpacity onPress={()=>{ console.log(users) }} style={styles.infoGroup}>
						<Text style={styles.infoNum}>11</Text>
						<Text style={styles.infoName}>Sátiros</Text>
					</TouchableOpacity>
					<TouchableOpacity  onPress={()=>{ navigation.navigate('Friends'); }} style={styles.infoGroup}>
						<Text style={styles.infoNum}>145</Text>
						<Text style={styles.infoName}>Amigos</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{ navigation.navigate('ContactsList'); }} style={styles.infoGroup}>
						<Text style={styles.infoNum}>10</Text>
						<Text style={styles.infoName}>Contatos</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<View style={styles.cardImage}>
					<View style={styles.modalView}>
						{/* ////////////////////Tirar Foto//////////////////// */}
							<TouchableHighlight onPress={()=>{}} style={styles.listItem} activeOpacity={0.8} 
							underlayColor="#61657B">
									<View style={styles.containerImageOptions}>
											<Text style={styles.TextImageOptions}>Tirar Foto</Text>
									</View>
							</TouchableHighlight>
						{/* ////////////////////Selecionar da Galeria//////////////////// */}
							<TouchableHighlight onPress={()=>{}} style={styles.listItem} activeOpacity={0.8} 
							underlayColor="#61657B">
									<View style={styles.containerImageOptions}>
											<Text style={styles.TextImageOptions}>Selecionar da Galeria</Text>
									</View>
							</TouchableHighlight>
						{/* ////////////////////Cancelar//////////////////// */}
							<TouchableHighlight onPress={() => {setModalVisible(!modalVisible);}}
							style={styles.listItem} activeOpacity={0.8} underlayColor="#61657B">
									<View style={styles.containerImageOptions}>
											<Text style={styles.TextImageOptions}>Cancelar</Text>
									</View>
							</TouchableHighlight>
					</View>
				</View>
			</Modal>
      <View style={styles.card2}/>
			<View style={styles.card}>
				<View style={styles.searchContainer}>
					<SearchBar/>
				</View>
				<View style={{height: '100%', paddingBottom: '35%', marginTop: '15%', width: '100%'}}>
					<ScrollView>
						{users.user.map(user =>(
							<Friend 
							image={user.image} 
							name={[user.name.split("", 15),"..."]} 
							description={[user.description.split("", 30),"..."]}
							/>
						))}
					</ScrollView>
				</View> 
			</View>
		</View>
  )
}

const styles = StyleSheet.create(profileStyle)
export default Profile;