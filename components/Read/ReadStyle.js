import { StyleSheet } from 'react-native';

import variables from '../variables';

const ReadStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleRead:{
        fontSize: variables.call().typography._titleSizeSmall,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        textAlign: 'center'
    },

    titlePage:{
        padding: 40,
        fontSize: variables.call().typography._titleSize,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        textAlign: "center"
    },

    titleName:{
        fontSize:  variables.call().typography._titleCard,
        fontWeight: 'bold',
        color: "white",
        padding: 8,
    },


    containerView: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
    },

    alignCard:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },

    card:{
        width: '100%',
        backgroundColor: variables.call().colors._secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        borderRadius: 5,
        marginBottom: 20
    },

    data:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    dataInfo:{
        color: variables.call().colors._primary,
        fontWeight: 'bold',
    }



})

export default ReadStyle;