import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressCircle from 'react-native-progress-circle'

import EventCard from '../../components/nightEvent';
import NightSatiro from '../../components/NightSatiro';

import nightStyle from './night.styles.js';


const routeTest = () => {
	return (
		<View style={styles.Content}>
			<ScrollView>
				<Text style={styles.Title}>Administrar Noite</Text>
				<View style={styles.containerTimer}>
					<ProgressCircle
						percent={60}
						radius={103}
						borderWidth={12}
						color="#f8295f"
						shadowColor="#545C5D"
						bgColor="#272B35"
					>
						<Text style={styles.circleText}>00:00</Text>
						<Text style={styles.circleSubtext}>término 06:30</Text>
					</ProgressCircle>
					<TouchableOpacity style={styles.buttonStart}>
						<Text style={styles.textButton}>Iniciar</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.containerEvents}>
					<Text style={[styles.titleContents, {marginLeft: 22}]}>Eventos pendentes: </Text>
					<EventCard/>
					<EventCard/>
				</View>
				<View style={styles.containerSatiros}>
					<Text style={styles.titleContents}>Você é Sátiro de: </Text>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					<NightSatiro/>
					
				</View>
			</ScrollView>
		</View>
  )
}

export default routeTest

const styles = StyleSheet.create(nightStyle)
