import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function AddNewDeck ({ onPress }) {
  return (
    
        <TouchableOpacity onPress={onPress} >
         <View  style={{flexDirection: "row"}} backgroundColor={"green"}>
          <FontAwesome name='plus' size={18} color={'black'} /> 
          <Text>Add new deck</Text>
          </View>
        </TouchableOpacity>
      
  )
}