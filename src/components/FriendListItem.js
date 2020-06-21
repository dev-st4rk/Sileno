import React from 'react';
import { View, StyleSheet, Text, Image, Animated, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// import { Container } from './styles';

export default function FriendListItem( props ) {
	return (
		<Swipeable
    renderLeftActions={LeftActions}
    onSwipeableLeftOpen={props.onSwipeFromLeft}
    renderRightActions={(progress, dragX) => (
      <RightActions progress={progress} dragX={dragX} onPress={props.onRightPress} />
    )}>
			<View style={styles.itemContainer}>
				<Image style={styles.friendAvatar} source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} />
				<View style={{left: 10}}>
					<Text style={styles.titleItem}>{props.name}</Text>
					<Text style={styles.subtitleItem}>{props.description}</Text>
				</View>
				<Text style={styles.status}>{props.status}</Text>
			</View>
		</Swipeable>
	);
}

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.leftAction}>
      <Animated.View style={{ transform: [{ scale }], width: '58%', alignItems: 'center',
			flexDirection: 'row', justifyContent: 'space-between', marginLeft: '6%'}}>
					<MaterialIcons name="done" size={30} color="#fff"/>
					<Text style={[styles.leftText]}>Adicionar como Sátiro</Text>
				</Animated.View>
    </View>
  );
};

const RightActions = ({ progress, dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={onPress} style={{width: '30%', height: '100%', flexDirection: 'row',
		marginRight: '6%', alignItems: 'center', marginLeft: '-10%'}}>
      <View style={styles.rightAction}>
				<Animated.View style={{ transform: [{ scale }], alignItems: 'center'}}>
					<MaterialIcons name="not-interested" size={35} color="#fff"/>
					<Text style={styles.actionText}>Bloquear</Text>
				</Animated.View>
      </View>
    </TouchableOpacity>
  );
};


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
	},
	leftAction: {
    backgroundColor: '#3ACCE1',
		flexDirection: 'row',
		height: '72%',
		width: '88%',
		alignSelf: 'center',
		marginHorizontal: '6%',
		borderRadius: 9,
  },
  rightAction: {
    backgroundColor: '#F8295F',
    justifyContent: 'space-around',
		height: '72%',
		width: '100%',
		borderTopRightRadius: 9,
		borderBottomRightRadius: 9
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
  },
	leftText: {
    color: '#fff',
    fontWeight: 'bold',
		fontSize: 16
	}
});