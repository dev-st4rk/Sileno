module.exports = {
    map: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    extraMap: {
        position: 'absolute',
        bottom: 270,
        alignSelf: 'flex-end',
        right: 15,
        zIndex: 5,
        flexDirection: 'column',
        backgroundColor: '#111111',
        opacity: 0.81,
        borderRadius: 8,
    },
    touchable: {
        width: 52,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 8,
        borderTopEndRadius: 8
    },
    touchable2: {
        width: 52,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8
    },
    scrollCards: {
        width: '100%',
        height: 'auto', 
        position: 'absolute',
        bottom: 70,
        alignSelf: 'flex-end',
        opacity:1

    },
    cardSlide: {
        width: 142, 
        height: 172, 
        borderRadius: 12, 
        backgroundColor: '#14172A',
        marginHorizontal: 8,
        alignItems: 'stretch'
    },
    imagesCard: {
        width: '100%',
        height: 80,
        resizeMode: 'cover',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    cardTitle:{
        color: '#FFF',
        marginHorizontal: 15,
        marginTop: 25
    },
    cardSubTitle:{
        color: '#FFF',
        opacity: 0.56,
        marginHorizontal: 15,
        marginTop: 4
    },
    searchContainer: {
        position: 'absolute',
        top: "6%",
        left: 20,
        right: 20,
        zIndex: 5,
    },
    containerList: {
        backgroundColor: "#454F63",
        opacity: 0.79,
        color: '#ECECEC',
        marginTop: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        borderTopStartRadius: 3,
        borderTopEndRadius: 3,
        padding: 15
    },
    listItems: {
        fontSize: 16,
        paddingVertical: 12,
        opacity: 0.60,
        color: '#ECECEC',
    }
}