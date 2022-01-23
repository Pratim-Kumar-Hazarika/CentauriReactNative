// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Row from './components/Row';
const App = () => {
  const [lists, setLists] = useState<any>([]);
  const [inputText,setInputText] = useState<any>();
   const deleteItem = (index:any) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  const addTodoButton = ()=>{
    setLists((prev:any)=>[...prev,inputText]);
    setInputText('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.todo}>Todo 📝</Text>
      <TextInput style={styles.textInput} value={inputText}  onChangeText={(e)=>setInputText(e)}/>
      <TouchableOpacity
        style={styles.button}
        onPress={addTodoButton}
      >
        <Text>Add </Text>
      </TouchableOpacity>
        <FlatList
        data={lists}
        renderItem={({item, index}) => {
          return <Row data={item} handleDelete={() => deleteItem(index)} />;
        }}
      />
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  0,
  },
  todo:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold'

  },
  textInput:{
        borderWidth:1,
        borderColor:'#DDDDDD',
        padding: 15,
         marginVertical: 8,
         marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonAndInputBox:{
    display:'flex'
  }
});

export default App;
