import { View, Image, FlatList, ScrollView, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

import firebaseApp from "../firebaseConfig";

const db = firebaseApp.firestore();

import ImagesStyle from "./ImagesStyle";

function Images() {

  const [movies, setMovies] = useState([]);

    useEffect(() => {

        db.collection("movies").onSnapshot((query) => {

          const list = [];
    
          query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
    
          setMovies(list);

        });

      },[]);
  

  return (
    
    <ScrollView style={ImagesStyle.containerView}>

      <SafeAreaView style={ImagesStyle.container}>

        <Text style={ImagesStyle.titlePage}>Vizualize as capas dos filmes</Text>
        
        <FlatList
                      
        data={movies}

        renderItem={({ item }) => {

        return (

          <View>
            
            <Text style={ImagesStyle.title}>{item.name}</Text>
            <Image style={{ width: 200, height: 200,}} source={{uri: item.image}}/>

          </View>
          
          )

        }}

      />

      </SafeAreaView>

    </ScrollView>

    

  );
}

export default Images;
