import React, { useState } from 'react';
import AppStack from './AppStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack2 from './AppStack2';
const Tab = createBottomTabNavigator();

export default function AppTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="HOME" component={AppStack}/>
            <Tab.Screen name="Settings" component={AppStack2}/>
        </Tab.Navigator>
    )
}