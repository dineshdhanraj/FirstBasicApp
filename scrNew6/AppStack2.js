import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsApp from './SettingsApp';
import SettingsApp2 from './SettingsApp2';
const Stack = createStackNavigator();

export default function AppStack2(){
    return(
<Stack.Navigator initialRouteName="Settings Tab">
        <Stack.Screen name="Home9" component={SettingsApp} />
        <Stack.Screen name="HomeScreen5" component={SettingsApp2} />
      </Stack.Navigator>
    )
}