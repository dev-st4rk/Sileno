module.exports = {
    Content: {
        elevation: 0,
        flex: 1,
        backgroundColor: '#0B0D19',
    },
    topicons: {
        position: 'absolute',
        width: '100%',
        top: 25,
        paddingHorizontal: 10,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    pageRoutes: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 100,
        alignSelf: 'center'

    },
    divisor: {
        position: 'absolute',
        width: '110%',
        height: '51%',
        left: -2,
        backgroundColor: '#0B0D19',
        top: 190,
        transform: [{
            rotate: "-4deg"
        }],
        borderWidth: 3,
        borderRadius: 2,
        borderTopColor: '#f8295f',
        borderLeftColor:'transparent',
        borderBottomWidth: 0,
        shadowColor: '#f8295f',
        shadowOffset: {
            width: 0,
            height: 22
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
    },
    textRoutes: {
        fontSize: 20,
        color: '#A1A1A1'
    },
    searchContainer: {
        position: 'absolute',
        top: 145,
        left: 20,
        right: 20,
    },
    imageTop: {
        opacity:0.7,
        width: '100%',
        height: 200
    },
    textTop: {
        top:75,
        left:40,
        fontSize: 20,
        color: '#fff'
    },
    friendsView: {
        width:'100%',
        height:'100%',
        elevation: 2,
    }

}