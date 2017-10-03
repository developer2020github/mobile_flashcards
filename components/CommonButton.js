//generic  button component
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function CommonButton ({ onPress, text, btnBackgroundColor }) {
  return (
    
        <TouchableOpacity onPress={onPress} style={[styles.genericBtn, {backgroundColor: btnBackgroundColor}]}>
         <View  style={{flexDirection: "row"}}>
          <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      
  )
}

const styles = StyleSheet.create({

    genericBtn: {
        margin: 9,
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5
      },


})
