/* eslint-disable */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

function PriceDetails({tags,price}:any){
    return(
        <View style={styles.prices}>
        <Text style={{fontWeight:"300"}}>{tags}</Text>
        <Text style={{fontWeight:"300"}}>{price}</Text>
    </View>
    )
}

export default function Cart() {
    
  return (
    <View>
      {/* Cart component with image */}
      <View style={styles.productDetails}>
          <View style={styles.imageContainer}>
                
      
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
          }}
        />
    
          </View>
          <View style={styles.productDetailContainer}>
              <Text style={styles.brandName}>HRX by Hrithik</Text>
              <Text style={styles.brandDetails}>Men Maroon Printed Cotton ..</Text>
              <Text style={styles.sellerName}>Sold by :Pratim</Text>
              <View style={{flexDirection:"row",padding:6}}>
                  <TouchableOpacity>
                    <Text style={styles.btns}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{marginLeft:10,fontSize:17,marginTop:5}}>10</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={[styles.btns,{marginLeft:15}]}>+</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.price}>Rs 1,610</Text>
              <View>

              </View>
              </View>
      </View>
      {/* Checkout details */}
      <View style={styles.priceDetails}>
          {/* <View > */}
          <Text style={styles.totalItems}>Price Details 1 item</Text>
          <View style={{borderColor:"#eaeaec",borderWidth:0.5,marginTop:9}}></View>
            <PriceDetails tags={"Total MRP"} price={"Rs 4,494"}/>
          <PriceDetails  tags={"Discount on MRP"} price={"Rs 4,494"}/>
             <PriceDetails  tags={"Coupon Discount"} price={"Rs 4,494"}/>
             <PriceDetails  tags={"Convenience Fees"} price={"FREE"}/>
             <View style={{borderColor:"#eaeaec",borderWidth:0.5,marginTop:9}}></View>

            <View style={[styles.prices]}>
            <Text style={[styles.totalItems,{fontSize:17}]}>Total Price</Text>
        <Text style={[styles.totalItems,{fontSize:17}]}>Rs 1,999</Text>
            </View>
              {/* </View> */}
         
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
   
    productDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:8,
        borderRadius:8
        // backgroundColor:'white',
    },
    cardImage:{
        width: '100%',
        height: 180,
    },
    imageContainer:{
        // borderColor:'red',
        // borderWidth:1,
        width:'40%',
        padding:7,
                backgroundColor:'white',

    },
    productDetailContainer:{
        // borderColor:'red',
        // borderWidth:1,
        width:'60%',
        padding:7,
                backgroundColor:'white',

    },
    btns:{
        // borderWidth:2,
        borderColor:'red',
        backgroundColor:"#FF3F6C",
        width:38,
        padding:1,
        color:"white",
        textAlign:"center",
        borderRadius:4,
        overflow:'hidden',
        fontSize:25,


        },
        brandName:{
            color:"#282C3F",
            fontWeight:'600',
            fontSize:17,
            padding:2
        },
        brandDetails:{
            color:"#282C3F",
            fontWeight:'400',
            fontSize:15,
            padding:2
        },
        sellerName:{
            color:"#92969F",
            fontSize:14,
            padding:2
        },
        price:{
            color:"#282c3f",
            fontWeight:'500',
            padding:6,
            fontSize:17,

        },
        priceDetails:{
            borderColor:"red",
            // borderWidth:1,
            padding:10,
        borderRadius:4,
        backgroundColor:"white",
        color:"#282c3f",
        width:'96%',
        marginLeft:7
        },
        prices:{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:8,
            
        },
        totalItems:{
            color:'#535766',
            fontWeight:'500',
            fontSize:15
        }
  });