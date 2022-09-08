import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyContact from '../mycontact';
import CreateContact from '../createcontact';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
const stack = createNativeStackNavigator();

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="MyContact">
        <stack.Screen name="MyContact" component={MyContact} />
        <stack.Screen name="CreateContact" component={CreateContact} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
