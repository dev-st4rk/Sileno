module.exports = {
	Content: {
		flex: 1,
		backgroundColor: '#0B0D19',
		flexDirection: 'column',
	},
	containerImageDesc: {
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
		backgroundColor: '#F8295F',
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
		backgroundColor: '#0B0D19',
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
	circle: { 
		borderWidth: 5,
		borderRadius: 50,
		borderColor: '#F8295F',
		height: 70,
		width:70,
		justifyContent: 'center',
		alignItems: 'center'
	},
	circleInside: {
		borderWidth: 2,
		borderRadius: 50,
		borderColor: '#EDEDED',
		height: 55,
		width:55,
		backgroundColor: '#FFF'
		}
}
