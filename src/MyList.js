import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const MyList = () => {
  return(<Text style={myStyles.item}>normal title</Text>);
};

export const MyItem = () => {
  return(<Text style={myStyles.item}>my item</Text>);
};

const myStyles = StyleSheet.create({
  item: { 
    top: 150, 
    left:100, 
    backgroundColor:'blue'
   },
})