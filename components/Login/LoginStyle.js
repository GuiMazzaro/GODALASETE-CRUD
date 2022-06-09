import { StyleSheet } from 'react-native';

import variables from '../variables';

const LoginStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center'
    },

    logo:{
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form:{
        width: '80%',
        height: '80%',
        display: 'flex'
    },

    formHeader:{
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center'
    },

    formContent:{
        width: '100%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center'
    },

    titleLogin:{
        fontSize: variables.call().typography._titleSize,
        fontWeight: 'bold',
        color: variables.call().colors._third,
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

    alignDiv:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btn:{
        backgroundColor: variables.call().colors._secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        padding: 8,
        borderRadius: 5
    },

    btnText:{
        fontSize: variables.call().typography._btnText,
        fontWeight: 'bold',
        color: 'white'
    },

    createAcc:{
        fontSize: variables.call().typography._btnText,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        marginTop: '40%',
    },

    logo:{
        width: 200,
        height: 200,
        marginTop: 10
    }

});

export default LoginStyle;