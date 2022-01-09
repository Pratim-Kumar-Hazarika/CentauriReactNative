/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, View,Text,TextInput} from 'react-native';

const App = () => {
  const [inputText,setInputText] = useState<Number>(20);
  const [inputBoxBgColor,setInputBoxBgColor] = useState<string>('grey');
  function inputHandler(e: string | React.SetStateAction<any> ){
    if (e.length === 0){
      setInputText(20);
      setInputBoxBgColor('grey');
    } else if (e.length !== 0){
      setInputText(()=>20 - e.length);
       if (e.length > 10 || e.length === 20 ){
        setInputBoxBgColor('yellow');
      } if (e.length < 10){
        setInputBoxBgColor('grey');
      } if ( e.length > 20){
        setInputBoxBgColor('red');
      }
    }
  }
  return (
    <View style={styles.container} >
      <Text>Character Count</Text>
      <TextInput style={{
         borderWidth:3,
        borderColor:inputBoxBgColor,
        padding:8,
        width:200,
        height:200,
        borderRadius:10,
      }}
       multiline={true}
      numberOfLines={10}
      onChangeText={(e)=>inputHandler(e)}
    />
    <Text>{inputText} characters remaining</Text>
  </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});

export default App;
