import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import LoginStyle from './LoginStyle';

import firebaseApp from '../firebaseConfig';

function Login({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFirebase = () => {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                ///navigation.navigate('Create', { idUser: user.uid })
                navigation.navigate('Routes')
            })
            .catch((error) => {
               alert("User not found") 
               setEmail('')
               setPassword('')
            });
    }
 
    return(

        <SafeAreaView style={LoginStyle.container}> 
            
            <View style={LoginStyle.logo}>

                <Image source = {require('../../assets/logo.png')} style={LoginStyle.logo}/>

            </View>

            <View style={LoginStyle.form}> 

                <View style={LoginStyle.formHeader}>
                    
                    <Text style={LoginStyle.titleLogin}>Login</Text>
                
                </View> 

                <View style={LoginStyle.formContent}> 

                    <Text style={LoginStyle.label}>Email:</Text>
                    <TextInput placeholder="Digite seu email..." style={LoginStyle.input} value={email} onChangeText={text => setEmail(text)}/>

                    <Text style={LoginStyle.label}>Senha:</Text>
                    <TextInput secureTextEntry={true} placeholder="Digite seu email..." style={LoginStyle.input} value={password} onChangeText={text => setPassword(text)}/>

                    <View style={LoginStyle.alignDiv}>

                        <TouchableOpacity style={LoginStyle.btn} onPress={loginFirebase}>
                            <Text style={LoginStyle.btnText}>Login</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={LoginStyle.alignDiv}>

                        <TouchableOpacity style={LoginStyle.createAcc} onPress={() => navigation.navigate('Register')}>
                            <Text style={LoginStyle.btnText}>Não possui conta? Clique aqui</Text>
                        </TouchableOpacity>

                    </View>

                </View>


            </View>

        </SafeAreaView>

    );

}

export default Login;

