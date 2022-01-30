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
import { CartContextProvider, useCart } from './Context/CartContext';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const App = () => {

  const Tab = createBottomTabNavigator();  
  const Stack = createNativeStackNavigator();
  return (
    <CartContextProvider>
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={({ route }) => ({
      //     tabBarActiveTintColor: '#00a3ff',
          
      // })}
      
      >
        
      <Stack.Screen
          name="Men Tshirts"
          component={Products}
         
        />
        <Stack.Screen name="ProductDetails"   options={{ title: ' ',  headerTintColor: '#282C3F', }} component={ProductDetails} />
        <Stack.Screen  name="Cart"  options={{ title: 'Your Cart', headerTintColor: '#282C3F', }} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', 
    flexWrap: 'wrap',
  },
});

export default App;
