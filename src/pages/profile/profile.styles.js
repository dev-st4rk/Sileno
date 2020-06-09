module.exports = {
    Content: {
        flex: 1,
        backgroundColor: '#474A5D',
    },
    topicons: {
        position: 'absolute',
        width: '100%',
        top: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    containerUser: {
        position: 'absolute',
        alignSelf: 'center',
        top: "14%",
    },
    containerAvatar: {
        width: 60,
    },
    userAvatar:{
        width: 100,
        height: 100,
        borderRadius: 60,
        alignSelf: 'center',
        elevation:0,
    },
    addImage: {
        position: 'absolute',
        width: 35,
        right: 70,
        top: 75,
    },
    containerTextUser: {
        alignItems: 'center',
        top: 10
    },
    nameUser: {
        color: '#FFFFFF',
        fontSize: 20
    },
    descUser: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7
    },
    userInfo: {
        width: 250,
        top: 20,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    infoGroup: {
        alignItems: 'center'
    },
    infoNum: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    infoName: {
        fontSize: 14,
        color: '#FFFFFF',
        opacity: 0.7
    },
    card: {
        position: 'absolute',
        
        width: '100%',
        height: '50%',
        backgroundColor: 'red',
        bottom: 0,
    },
    card2: {
        position: 'absolute',
        width: '110%',
        height: '51%',
        left:-2,
        backgroundColor: 'blue',
        bottom: 20,
        transform: [{ rotate: "-4deg" }],
        borderWidth: 2,
        borderColor: "#F8295F",
                shadowColor: "#f8295f",
                shadowOpacity: 2,
                shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: -2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,


    },
    searchContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
    },
    containerScroll: {
        height: '56%',
        top: '25%'
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
        borderRadius: 15,
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
}