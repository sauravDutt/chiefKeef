import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 
  return (
    <View style={{
      padding:30,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <TextInput 
          placeholder='Write a ToDo ....🍻'
          style={{
            textAlign: 'center',
            borderColor:'#000',
            borderWidth:1,
            width:'80%',
            borderRadius: 15,
            padding: 10,
          }}
        />
        <Button title = 'ADD'/> 
      </View>
      <View> 

      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  
});
