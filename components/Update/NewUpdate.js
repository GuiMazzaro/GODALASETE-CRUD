import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

import NewUpdateStyle from './NewUpdateStyle';

import firebaseApp from '../firebaseConfig';

const db = firebaseApp.firestore();

function NewUpdate({navigation, route}){

    const [titleMovie, setTitleMovie] = useState(route.params.name)
    const [description, setDescription] = useState(route.params.description)
    const [year, setYear] = useState(route.params.year)
    const [duration, setDuration] = useState(route.params.duration)
    const [image, setImage] = useState(route.params.image)
    const idMovie = route.params.id

    function updateMovie(titleMovie,description,year,duration,idMovie,image){

        db.collection("movies").doc(idMovie).update({
            name: titleMovie,
            description: description,
            duration: duration,
            year: year,
            image: image,
        });

        navigation.navigate('Update');

    }

    return(

        <SafeAreaView style={NewUpdateStyle.container}>

           <ScrollView style={NewUpdateStyle.containerView}>

                <View style={NewUpdateStyle.titlePage}>
                        <Text style={NewUpdateStyle.title}>Update Movies</Text>
                </View>

                <View style={NewUpdateStyle.titleData}>
                        <Text style={NewUpdateStyle.title}>Atualize os dados abaixo:</Text>
                </View>

                <View style={NewUpdateStyle.form}>

                <Text style={NewUpdateStyle.label}>Título:</Text>
                <TextInput placeholder="Digite o nome do filme..." style={NewUpdateStyle.input} value={titleMovie} onChangeText={text => setTitleMovie(text)}/>

                <Text style={NewUpdateStyle.label}>Descrição do filme:</Text>
                <TextInput placeholder="Digite a descrição..." style={NewUpdateStyle.input} value={description} onChangeText={text => setDescription(text)}/>

                <Text style={NewUpdateStyle.label}>Duração:</Text>
                <TextInput placeholder="Digite a duração..." style={NewUpdateStyle.input} value={duration} onChangeText={text => setDuration(text)}/>

                <Text style={NewUpdateStyle.label}>Ano de lançamento:</Text>
                <TextInput placeholder="Digite o ano de lançamento..." style={NewUpdateStyle.input} value={year} onChangeText={text => setYear(text)}/>

                </View>

                <View style={NewUpdateStyle.alignDiv}>

                <TouchableOpacity style={NewUpdateStyle.btn} onPress={() => {updateMovie(titleMovie,description,year,duration,idMovie,image)}}>
                    <Text style={NewUpdateStyle.btnText}>Atualizar</Text>
                </TouchableOpacity>

                </View>

           </ScrollView>


       </SafeAreaView>
        
    );

}

export default NewUpdate;