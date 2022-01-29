/* eslint-disable */

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Data } from '../utils/data';
const Products = ({ navigation }:any) => {
    const renderItem = ({ item }): JSX.Element => (
      <View style={styles.card} >
        <Image
          style={styles.cardImage}
          source={{
            uri: item.imageUrl,
          }}
        />
        <Text style={styles.cardBrandName}>{item.brandName}</Text>
        <Text style={styles.cardBrandDetails}>{item.brandDetails}</Text>
        <Text style={styles.cardBrandPrice}>{item.brandPrice}</Text>
        </View>
    );
    return (
      <ScrollView>
      <FlatList
          contentContainerStyle={styles.flatList}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    card:{
      height: 333, 
      width: 195, 
      marginBottom: 3,
      backgroundColor:"white"
    },
    cardImage: {
      width: 200,
      height: 270,
    },
    cardBrandName:{
      fontWeight:'bold',
      color:'#282C3F',
      fontSize:17,
      marginLeft:5,
      padding:2
    },
    cardBrandDetails:{
      color:'gray',
      marginLeft:5,
      padding:2
    },
    cardBrandPrice:{
      fontWeight:'400',
      marginLeft:5,
      padding:2
    },
    flatList:{
      flexDirection: 'row',flexWrap: 'wrap' ,maxWidth:1300
    }
  });

  export default Products;