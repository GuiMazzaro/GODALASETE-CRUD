import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import UpdateStyle from './UpdateStyle';

import firebaseApp from '../firebaseConfig';

const db = firebaseApp.firestore();

function Read({navigation}){

    const [movies, setMovies] = useState('')

    function updateMovie(){

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
        
        <ScrollView style={UpdateStyle.containerView}>
            
        <SafeAreaView style={UpdateStyle.container}>

            <Text style={UpdateStyle.titlePage}> Update Movies </Text>

            <Text style={UpdateStyle.titleRead}> Atualize os filmes disponíveis abaixo</Text>

            <FlatList
                
                data={movies}

                renderItem={({ item }) => {

                    return (
                        
                        <View style={UpdateStyle.card}>
                            
                            <View style={UpdateStyle.titleCard}>
                                <Text style={UpdateStyle.titleName}>{item.name}</Text>
                            </View>

                            <View style={UpdateStyle.data}> 

                                <TouchableOpacity style={UpdateStyle.btn} onPress={() => {
                                    navigation.navigate('NewUpdate', {
                                        id: item.id,
                                        name: item.name,
                                        description: item.description,
                                        duration: item.duration,
                                        year: item.year,
                                        image: item.image
                                    })
                                }}>
                                    <Text style={UpdateStyle.textBtn}>Atualizar</Text>
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

export default Read;