import { StyleSheet } from 'react-native';
import variables from '../variables';

const ImagesStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
        alignItems: 'center'
    },

    containerView: {
        flex: 1,
        backgroundColor: variables.call().colors._primary,
        display: "flex",
    },
   
    titlePage:{
        padding: 40,
        fontSize: variables.call().typography._titleSize,
        fontWeight: 'bold',
        color: variables.call().colors._third,
        textAlign: "center"
    },

    title:{
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white'
    }

    
    
})

export default ImagesStyle;