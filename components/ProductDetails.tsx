/* eslint-disable */

import { Text, StyleSheet, View, Image, TouchableHighlight, Dimensions, ScrollView, Button } from 'react-native';
import React, { Component } from 'react';
import ActionBarImage from './ActionBarImage';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
function ItemSize({itemSize}:any){
    return(
        <View>
        <TouchableHighlight
        style = {{
       borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
       width: 50,
       height:50,
       backgroundColor:'white',
       justifyContent: 'center',
       alignItems: 'center',
       borderColor:'#FF3E6C',
       borderWidth:1,
       marginLeft:10
     }}
     underlayColor = '#FF6E6E'
    //  onPress = { () => alert('Yaay!') }
   >
     <Text> {itemSize} </Text>

   </TouchableHighlight>
   </View>
    )
}

export default function ProductDetails({ navigation, route }:any) {
    console.log({route})
    console.log("herer",route.params.options)
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <ActionBarImage navigation={navigation}/>,
        });
      }, [navigation]);
    
    return (
        <View>
        <ScrollView style={{height:'100%'}}>
      <View style={styles.cardContainer}>
        
      
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
          }}
        />
    
         <Text style={styles.itemBrandName}>HRX by Hrithik Roshan</Text>
        <Text style={styles.itemDetails}>Men Teal Blue Printed Pure Cotton T-shirt</Text>
        <Text style={styles.itemPrice}>Rs 349</Text>
        <Text style={styles.itemSize}>Select Size</Text>
        <View style={styles.itemSizes}>
      <ItemSize itemSize={'S'}/>
      <ItemSize itemSize={'XL'}/>
      <ItemSize itemSize={'M'}/>
      <ItemSize itemSize={'XXL'}/>
      </View>
      <Text style={styles.itemDetails}>Product Details</Text>
      <Text style={styles.itemFulldescription}>This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.
    </Text>
      
    <Text style={styles.itemDetails}>Model Size and Fit</Text>
      <Text style={styles.itemFulldescription}>The model height 6'1 is wearing size M
    </Text>


    <Text style={styles.itemDetails}>Material and Care</Text>
      <Text style={styles.itemFulldescription}>100% cotton
    </Text>

      </View>
      {/* bottom view */}
      
      </ScrollView>
      <View style={styles.container}>
          <View>
          <Text style={[styles.buttonText,{
              backgroundColor:'white',
              color:'#3E4152',
              borderColor:'#D4D5D9'
          }]}>WISHLIST</Text>
          </View>
       
          <View>
          <Text style={[styles.buttonText,{marginRight:4}]}>ADD TO CART</Text>
          </View>
    </View>
</View>
    );
  
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"white",
        height:'100%',

    },
    cardImage: {
        width: 390,
        height: 470,
      },
      itemBrandName:{
        padding:7,
        fontSize:21,
        color:"#282C3F",
        fontWeight:'600'
      },
      itemDetails:{
          padding:7,
          fontSize:17,
          color:'#A1A2AA'
          
      },
      itemPrice:{
        padding:7,
        fontSize:20,
        color:"#FF3E6C",
        fontWeight:'600'
      },
      itemSize:{
        padding:7,
        fontSize:15,
        color:"#282C3F",
      },
      itemSizes:{
          flexDirection:'row',
          marginTop:5
      },
      itemFulldescription:{
          color:'#7e808c',
          padding:7,
      },
      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
      container: {
        // right: 10,
        // left: 10,
        // display:'flex',
        position: 'absolute',
        // bottom: 10,
        
        // // color:'red',
        // padding:10,
        // borderRadius:10
        // borderColor:'red',
        // borderWidth:10,
        flexDirection:'row',
        width:"100%",
        // justifyContent:'spa'
        justifyContent:'space-between',
        bottom:0,
        backgroundColor:'white',
        height:84,
        // borderTopColor:'grey',
        // borderWidth:1
      },
      buttonText:{
          textAlign:'center',
          fontSize:16,
          width:184,
          backgroundColor:'#FF3E6C',
          color:'white',
          padding:10,
          borderRadius:7,
          borderColor:'#FF3E6C',
          borderWidth:1,
          overflow:'hidden',
          fontWeight:'700',
          marginLeft:4,
          marginTop:3
      }
});
