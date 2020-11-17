import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../pages/Main';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const Routes:React.FC = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;