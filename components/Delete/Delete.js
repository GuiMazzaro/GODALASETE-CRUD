import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import DeleteStyle from './DeleteStyle';

import firebaseApp from '../firebaseConfig';

const db = firebaseApp.firestore();

function Delete(){

    const [movies, setMovies] = useState('')

    function deleteMovies(id){

        db.collection("movies").doc(id).delete();

    }

    useEffect(() => {
        
        db.collection("movies").onSnapshot((query) => {
            
            const list = []

            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })

            setMovies(list)
            
        })

    }, [])

    return(

        <ScrollView style={DeleteStyle.containerView}>

            <SafeAreaView style={DeleteStyle.container}>

                <Text style={DeleteStyle.titlePage}> Delete Movies</Text>

                <Text style={DeleteStyle.titleRead}> Delete os filmes disponíveis abaixo</Text>

                    <FlatList
                        
                        data={movies}

                        renderItem={({ item }) => {

                            return (

                                <View style={DeleteStyle.card}>
                                    
                                    <View style={DeleteStyle.titleCard}>
                                        <Text style={DeleteStyle.titleName}>{item.name}</Text>
                                    </View>

                                    <View style={DeleteStyle.data}> 

                                        <TouchableOpacity style={DeleteStyle.btn} onPress={() => {deleteMovies(item.id)}}>
                                            <Text style={DeleteStyle.textBtn}>Excluir</Text>
                                        </TouchableOpacity>
                                    
                                    </View>
                                    
                                </View>
                            )

                        }}
                    />


            </SafeAreaView>

        </ScrollView>

    );


}

export default Delete;