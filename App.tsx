/* eslint-disable */

import React from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Data } from './utils/data';
import Products from './components/Products';

const SeconedScreen = ({ navigation, route }:any) => {
  return <Text>This is seconed Screen,n </Text>;
};

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#00a3ff',
          
      })}
      >
      <Tab.Screen
          name="Home"
          component={Products}
          options={{ tabBarBadge: "5" }}
        />
        <Tab.Screen name="Profile"   options={{ title: 'Seconed Screen' }} component={SeconedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', 
    flexWrap: 'wrap',
  },
});

export default App;
