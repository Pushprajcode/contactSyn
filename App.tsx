import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationScreen from './src/screens/router';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
