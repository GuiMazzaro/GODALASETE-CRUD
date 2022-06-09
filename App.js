import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

import Login from './components/Login/Login';
import Read from './components/Read/Read';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';
import Images from './components/Images/Images';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import NewUpdate from './components/Update/NewUpdate';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function Routes(){

    return(

        <Tab.Navigator>

            <Tab.Screen name='Create' component={Home} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <MaterialIcons name="create" size={24} color="black" />)
                }}
            />

            <Tab.Screen name='Read' component={Read} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <Ionicons name="md-reader-outline" size={24} color="black" />)
                }}
            />

            <Tab.Screen name='Update' component={Update} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <MaterialIcons name="system-update-alt" size={24} color="black" />)
                }}
            />

            <Tab.Screen name='Delete' component={Delete} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <AntDesign name="delete" size={24} color="black" />)
                }}
            />

            <Tab.Screen name='Images' component={Images} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <Entypo name="image" size={24} color="black" />)
                }}
            />  

        </Tab.Navigator>

    );

}

  return (
    
    <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='Routes' component={Routes} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name='NewUpdate' component={NewUpdate} options={{ headerShown: false }}/>
        
      </Stack.Navigator>

    </NavigationContainer>

    
  );
}

