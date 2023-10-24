import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen from './screens/TabScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen
          name="Heading"
          component={TabScreen}
          options={{
            title: 'Checkins',
            headerTitleStyle: {
              fontSize: 20, 
            },
            headerTitleAlign: 'center',        
             }}
        />
       
       {/* <Stack.Screen name="TabScreen" component={TabScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
