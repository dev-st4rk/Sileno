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
        width: '55%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 100,
        alignSelf: 'center'

    },
    separadorSimples: {
        width: '30%',
        height: 3,
        backgroundColor: primaryColor.themeColor,
        alignSelf: 'center',
        marginBottom: 20,
        shadowColor: primaryColor.themeColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 145,
        left: 20,
        right: 20,
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
        width: '100%',
        height: '100%',
        elevation: 2,
    }

}