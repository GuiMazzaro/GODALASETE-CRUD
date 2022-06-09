import React, {useState} from 'react';
import { View, Text,SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import firebaseApp from '../firebaseConfig';

const db = firebaseApp.firestore();

import RegisterStyle from './RegisterStyle';

function Register({navigation}){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createLoginFirebase = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                createUser();
                navigation.navigate('Login')
            })
            .catch((error) => {
               alert("Algo deu errado") 
               setEmail('')
               setPassword('')
            });
    }

    const createUser = () => {

        db.collection("users").add({
            name: name,
            email: email,
        })

        alert("Usuário cadastrado com sucesso!")

    }

    return(

        <ScrollView style={RegisterStyle.containerView}>
            
            <SafeAreaView style={RegisterStyle.container}>
            
            <View style={RegisterStyle.form}> 

                <View style={RegisterStyle.formHeader}>
                    
                    <Text style={RegisterStyle.titleLogin}>Cadastre-se</Text>
                
                </View> 

                <View style={RegisterStyle.formContent}>

                    <Text style={RegisterStyle.label}>Nome:</Text>
                    <TextInput placeholder="Digite seu nome..." style={RegisterStyle.input} value={name} onChangeText={text => setName(text)}/> 

                    <Text style={RegisterStyle.label}>Email:</Text>
                    <TextInput placeholder="Digite seu email..." style={RegisterStyle.input} value={email} onChangeText={text => setEmail(text)}/>

                    <Text style={RegisterStyle.label}>Senha:</Text>
                    <TextInput placeholder="Digite seu email..." style={RegisterStyle.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>


                    <View style={RegisterStyle.alignDiv}>

                        <TouchableOpacity style={RegisterStyle.btn} onPress={createLoginFirebase}>
                            <Text style={RegisterStyle.btnText}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={RegisterStyle.alignDiv}>

                        <TouchableOpacity style={RegisterStyle.createAcc} onPress={() => navigation.navigate('Login')}>
                            <Text style={RegisterStyle.btnText}>Voltar a tela de Login</Text>
                        </TouchableOpacity>

                    </View>

                </View>


            </View>

            </SafeAreaView>

        </ScrollView>
    );

}

export default Register;