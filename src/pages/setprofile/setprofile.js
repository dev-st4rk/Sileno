import React, { useState } from 'react'
import { 
	StyleSheet,
	Text, 
	View, 
	TouchableOpacity, 
	Image, Modal, 
	TouchableHighlight, 
	Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as ImageManipulator from "expo-image-manipulator";

import InputComponent from '../../components/Input';

import Triangles from '../../components/trianglesComponent';
import setprofileStyles from './setprofile.styles';

export default function SetProfile({navigation}) {
	const [name, setName] = useState(''); //state for inputName
	const [number, setNumber] = useState(25);
	const [modalVisible, setModalVisible] = useState(false); //state to show or hidden modal
	let [selectedImage, setSelectedImage] = React.useState(null); //state for the camera roll
	const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);

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

	let openCameraAsync = async () => {
		setModalVisible(!modalVisible);
		const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');

		if (hasPermission === null) {
    return <View />;
		}

		if (hasPermission === false) {
			return <Text>No access to camera</Text>;
		}
	}

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	return (
		<View style={styles.Content}>
			{ hasPermission?
					<View style={{ backgroundColor: '#0B0D19', paddingTop: '10%'}}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<TouchableOpacity onPress={() => {setHasPermission(!hasPermission);}}>
								<Ionicons name="md-close" size={36} color="#FFF" style={{marginLeft: '20%'}}/>
							</TouchableOpacity>
							<Text style={{color: '#FFF', fontSize: 22, marginLeft: '14%'}}>Camera</Text>
						</View>
						<Camera 
						style={{ width: windowWidth, height: windowHeight/1.7, marginTop: '4%'}}
						type={type}
						ref={ref => { setCameraRef(ref) ; }}
						ratio={'3:3'}/>
						<View style={{flexDirection: 'row', justifyContent: 'space-around',
						alignItems: 'center', marginTop: '15%'}}>
							<TouchableOpacity>
								<Ionicons name="ios-flash" size={40} color="#FFF"/>
							</TouchableOpacity>
							<TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
							if(cameraRef){
								let photo = await cameraRef.takePictureAsync();
								setSelectedImage({ localUri: photo.uri });
								setHasPermission(!hasPermission);
								}
							}}>
								<View style={styles.circle}>
									<View style={styles.circleInside}/>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{ }}
							onPress={() => {
								setType(
									type === Camera.Constants.Type.back
										? Camera.Constants.Type.front
										: Camera.Constants.Type.back
								);
							}}>
								<Ionicons name="ios-reverse-camera" size={40} color="#FFF"/>
							</TouchableOpacity>
						</View>
					</View>
			:
			<>
				<View style={{top: '15%'}}>
				<Triangles/>
			</View>
			<View style={styles.containerImageDesc}>
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
					<MaterialIcons name="arrow-forward" size={24} color="#FFF"/>
				</TouchableOpacity>
			</View>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
					<View style={styles.cardImage}>
						<View style={styles.modalView}>
							{/* ////////////////////Tirar Foto//////////////////// */}
							<TouchableHighlight onPress={openCameraAsync} style={styles.listItem} activeOpacity={0.8} 
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
			</>
			}
		</View>
	)
}

const styles = StyleSheet.create(setprofileStyles);