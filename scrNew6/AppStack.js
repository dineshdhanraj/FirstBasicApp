import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home1 from './component';
import { HomeScreen,DetailsScreen } from './screens';
const Stack = createStackNavigator();

export default function AppStack(){
    return(
<Stack.Navigator initialRouteName="Home5">
        <Stack.Screen name="Home" component={Home1} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    )
}