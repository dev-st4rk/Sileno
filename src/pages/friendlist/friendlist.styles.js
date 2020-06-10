import primaryColor from '../../visual.json';
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
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignSelf: 'center'

    },
    separadorSimples: {
        width: '30%',
        height: 3,
        backgroundColor: primaryColor.themeColor,
        alignSelf: 'center',
        marginTop:10,
        marginBottom: 20,
        shadowColor:'red',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,

        elevation: 6,
    },
    divisor: {
        position: 'absolute',
        width: '110%',
        height: '51%',
        left: -2,
        backgroundColor: '#0B0D19',
        top: 20,
        transform: [{
            rotate: "-4deg"
        }],
        borderWidth: 3,
        borderRadius: 2,
        borderTopColor: primaryColor.themeColor,
        borderLeftColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: primaryColor.themeColor,
        shadowOffset: {
            width: 0,
            height: 22
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
    },
    textRoutes: {
        fontSize: 15,
        color: '#A1A1A1'
    },
    searchContainer: {
        alignSelf:'center',
        width:'80%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
       
    },
    imageTop: {
        opacity: 0.7,
        width: '100%',
        height: 200
    },
    textTop: {
        fontSize: 20,
        color: '#fff'
    },
    subtextTop: {
        fontSize: 10,
        color: '#fff'
    },
    headerText: {
        top: 75,
        left: 40,
    },
    friendsView: {
        backgroundColor:'blue',
        flex:1,
        width: '100%',
        height: '100%',
        elevation: 2,
    }

}