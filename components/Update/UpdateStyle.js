import { StyleSheet } from 'react-native';

import variables from '../variables';

const UpdateStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center'
    },

    titleRead:{
        fontSize: variables.call().typography._titleSizeSmall,
        fontFamily: variables.call().typography._fontGlobal,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        textAlign: 'center'
    },

    titlePage:{
        padding: 40,
        fontSize: variables.call().typography._titleSize,
        fontFamily: variables.call().typography._fontGlobal,
        fontWeight: 'bold',
        color: variables.call().colors._third,
    },

    card:{
        backgroundColor: variables.call().colors._secondary,
        height: "auto",
        width: "100%",
        marginTop: 30,
        borderRadius: 3
    },

    titleCard:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleName:{
        fontSize:  variables.call().typography._titleCard,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },

    data:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    dataInfo:{
        padding: 10,
        fontSize:  18
    },
    
    btn:{
        backgroundColor: variables.call().colors._third,
        padding: 5,
        margin: 5,
        borderRadius: 3
    },

    textBtn:{
        fontWeight: 'bold',
    },
    containerView: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
    },

})

export default UpdateStyle;