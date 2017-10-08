//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This module contains definition of a generic  button component used across the application. 
//========================================================================================
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function CommonButton ({ onPress, text, btnBackgroundColor }) {
  return (
        <TouchableOpacity onPress={onPress} style={[styles.genericBtn, {backgroundColor: btnBackgroundColor}]}>
         <View>
            <Text style={styles.genericBtnText}>{text}</Text>
          </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    genericBtn: {
        margin: 9,
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5, 
        minWidth: 250,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    genericBtnText: {
        fontWeight: "bold"
    }

})
