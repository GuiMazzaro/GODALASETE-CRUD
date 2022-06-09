import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import firebaseApp from '../firebaseConfig';

const ImagePicker = require('expo-image-picker')

const db = firebaseApp.firestore();

import HomeStyle from './HomeStyle';

function Home({navigation}){

    const [titleMovie, setTitleMovie] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [imageUri, setImageUri] = useState('')

    const openFile = async () => {
       
        const options = {}
        ImagePicker.requestMediaLibraryPermissionsAsync()
        ImagePicker.useMediaLibraryPermissions
        const image = await ImagePicker.launchImageLibraryAsync()
        setImageUri(image)
        
    }

    const createMovie = () => {
        if(imageUri == ''){
            alert('Selecione uma imagem!')
        }else{
            db.collection("movies").add({
                name: titleMovie,
                description: description,
                year: year,
                duration: duration,
                image: imageUri.uri
            })
            
            alert("Filme cadastrado com sucesso!")
        }
    }

    return(

       <SafeAreaView style={HomeStyle.container}>

           <ScrollView style={HomeStyle.containerView}>

                <View style={HomeStyle.titlePage}>
                        <Text style={HomeStyle.title}>Create Movies</Text>
                </View>

                <View style={HomeStyle.titleData}>
                        <Text style={HomeStyle.title}>Insira os dados abaixo:</Text>
                </View>

                <View style={HomeStyle.form}>

                <Text style={HomeStyle.label}>Título:</Text>
                <TextInput placeholder="Digite o nome do filme..." style={HomeStyle.input} value={titleMovie} onChangeText={text => setTitleMovie(text)}/>

                <Text style={HomeStyle.label}>Descrição do filme:</Text>
                <TextInput placeholder="Digite a descrição..." style={HomeStyle.input} value={description} onChangeText={text => setDescription(text)}/>

                <Text style={HomeStyle.label}>Duração:</Text>
                <TextInput placeholder="Digite a duração..." style={HomeStyle.input} value={duration} onChangeText={text => setDuration(text)}/>

                <Text style={HomeStyle.label}>Ano de lançamento:</Text>
                <TextInput placeholder="Digite o ano de lançamento..." style={HomeStyle.input} value={year} onChangeText={text => setYear(text)}/>

                <View style={HomeStyle.main}>

                    <Button onPress={()=>{openFile()}} title='Selecione a Imagem'></Button>

                </View>

                </View>

                <View style={HomeStyle.alignDiv}>

                    <TouchableOpacity style={HomeStyle.btn} onPress={createMovie}>
                        <Text style={HomeStyle.btnText}>Enviar</Text>
                    </TouchableOpacity>

                </View>

           </ScrollView>


       </SafeAreaView>


    );

}

export default Home;