import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home';
import Settings from './Settings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function TabScreen() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
    <Tab.Screen name="Submite" component={Home} />
    <Tab.Screen name="Check-ins" component={Settings} />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})