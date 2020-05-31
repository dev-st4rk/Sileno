import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import InputComponent from '../../components/Input';

export default function SetProfile({navigation}) {
	const [name, setName] = useState(''); //state for inputName
	const [number, setNumber] = useState(25);
	const [modalVisible, setModalVisible] = useState(false); //state to show or hidden modal
	let [selectedImage, setSelectedImage] = React.useState(null); //state for the camera roll

	let openImagePickerAsync = async () => { //function for select or not camera process
	setModalVisible(!modalVisible); //here the modal is hidden automatically
	let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
	//permissionResult is a variable that wait a response of user 
	//for stores information if the request is true or false

	if (permissionResult.granted === false) {
		alert('Permission to access camera roll is required!');
		return;
	}

	let pickerResult = await ImagePicker.launchImageLibraryAsync({
		allowsEditing: true,
		aspect: [3, 3],
		quality: 1,
	});
	if (pickerResult.cancelled === true) {
		return;
	}

	setSelectedImage({ localUri: pickerResult.uri });
	};

	return (
		<View style={styles.Content}>
			<View style={styles.containrImageDesc}>
					<View style={styles.imageContainer}>
						{ selectedImage?
						<>
							<Image source={{ uri: selectedImage.localUri }}
							style={styles.thumbnail} />
							<TouchableOpacity onPress={() => { setModalVisible(true);}} style={styles.iconAddImage}>
								<MaterialIcons name="add-circle" size={32} color="#fff"/>
							</TouchableOpacity>
						</>
						:
						<>
							<MaterialIcons name="person" size={80} color="#FFF"/>
							<TouchableOpacity onPress={() => { setModalVisible(true);}} style={styles.iconAddImage}>
								<MaterialIcons name="add-circle" size={32} color="#fff"/>
							</TouchableOpacity>
						</>}
					</View>
					<Text style={styles.textDesc}>Por favor, forneça seu nome e uma foto para o perfil (opcional).</Text>
			</View>
			<View style={{width:'80%', alignSelf: 'center', marginTop: 30}}>
				<InputComponent  //options: characters, words, sentences and none.
				autoCapitalize="words"
				keyboardAppearance="dark" // IOS only
				selectionColor="#fff" //color of cursor
				autoCorrect={false}
				maxLength={25}
				value={name} 
				onChangeText={setName}
				padding={{paddingRight: '32%'}}
				/>
				<Text style={styles.countInput}>{number}</Text>
				<TouchableOpacity onPress={()=>{
				navigation.navigate('Main');}} style={styles.buttonInput}>
					<MaterialIcons name="arrow-forward" size={24} color="#A7A7A7"/>
				</TouchableOpacity>
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
							<TouchableHighlight onPress={openImagePickerAsync} style={styles.listItem} activeOpacity={0.8} 
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
		</View>
	)
}

const styles = StyleSheet.create({
	Content: {
		flex: 1,
		backgroundColor: '#272B35',
		flexDirection: 'column',
	},
	containrImageDesc: {
		width: '80%',
		flexDirection: 'row',
		alignSelf: 'center',
		paddingTop: '25%',
		alignItems: 'center'
	},
	imageContainer: {
		width: 100,
		height: 100,
		marginRight: 15,
		borderRadius: 50,
		backgroundColor: '#C2C2C2',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	iconAddImage: {
		position: 'absolute',
		alignSelf: 'flex-end',
		top: 70,
		right: -8
	},
	textDesc: {
		width: '55%',
		height: 'auto',
		color: '#A7A7A7',
		fontSize: 17,
		lineHeight: 22
	},
	countInput:{
		position: 'absolute',
		color: '#A7A7A7',
		fontSize: 14,
		right: '25%',
		top: 14
	},
	buttonInput: {
		position: 'absolute',
		height: 48,
		width: 62,
		alignSelf: 'flex-end',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: '#111',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	thumbnail: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
		borderRadius: 100,
	},

	cardImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
  },
  modalView: {
		width: 230,
		height: 175,
		bottom: 154,
		backgroundColor: '#363B54',
		borderRadius: 8,
		padding: 10,
		justifyContent: 'space-around',
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2
  },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
  },
  listItem: {
		width: '100%',
		height: '32%',
		borderRadius: 5,
  },
  containerImageOptions: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
  },
  TextImageOptions: {
		color: '#FFFFFF',
		fontSize: 18,
		opacity: 0.7
  },
})
