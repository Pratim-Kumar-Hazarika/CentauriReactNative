/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstScreen = ({ navigation }:any) => {
  return (
    <View>
    <Button
      title="Click here to go to Seconed Screen"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Seconed screen' })
      }/>
      </View>
  );
};
const SeconedScreen = ({ navigation, route }:any) => {
  return <Text>This is {route.params.name}</Text>;
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="First Screen"
          component={FirstScreen}
          options={{ title: 'First Screen' }}
        />
        <Stack.Screen name="Profile"    options={{ title: 'Seconed Screen' }} component={SeconedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
