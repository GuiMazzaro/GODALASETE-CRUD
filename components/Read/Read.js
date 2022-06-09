import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import ReadStyle from './ReadStyle';

import firebaseApp from '../firebaseConfig';

const db = firebaseApp.firestore();

function Read(){

    const [movies, setMovies] = useState('')

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

        <ScrollView style={ReadStyle.containerView}>

        <SafeAreaView style={ReadStyle.container}>

            <Text style={ReadStyle.titlePage}> Read Movies</Text>

            <Text style={ReadStyle.titleRead}> Vizualize os filmes disponíveis abaixo</Text>

            <View style={ReadStyle.alignCard}>
            

                <FlatList
                    
                    data={movies}

                    renderItem={({ item }) => {

                        return (

                            <View style={ReadStyle.card}>
                                
                                <View style={ReadStyle.titleCard}>
                                    <Text style={ReadStyle.titleName}>{item.name}</Text>
                                </View>

                                <View style={ReadStyle.data}> 

                                    <Text style={ReadStyle.dataInfo}>Ano: {item.year}</Text>
                                    <Text style={ReadStyle.dataInfo}>Duração: {item.duration}</Text>
                                
                                </View>
                                
                            </View>
                        )

                    }}
                />

            </View>

        </SafeAreaView>

        </ScrollView>

    );


}

export default Read;