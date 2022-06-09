import { StyleSheet } from 'react-native';

import variables from '../variables';

const HomeStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center',
    },

    containerView: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
    },

    titlePage:{
        marginTop: 60
    },

    title:{
        fontSize: variables.call().typography._titleSize,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        textAlign: 'center',
    },

    titleData:{
        marginTop: 30
    },

    form:{
        width: '100%',
        marginTop: 20
    },

    label:{
        fontSize: variables.call().typography._labelSize,
        color: variables.call().colors._third,
        paddingBottom: 5,
        paddingTop: 5
    },

    input:{
        backgroundColor: variables.call().colors._third,
        padding: 8,
        borderRadius: 5,
        marginBottom: 25,
    },

    main:{
        flex: 1,
        backgroundColor: variables.call().colors._primary,
    },

    alignDiv:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn:{
        backgroundColor: variables.call().colors._secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        padding: 8,
        borderRadius: 5,
        marginBottom: 40,
        marginTop: 20
    },

    btnText:{
        fontSize: variables.call().typography._btnText,
        fontWeight: 'bold',
        color: 'white'
    },

});

export default HomeStyle;