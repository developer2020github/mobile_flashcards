//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This module handles a deck item view for list of decks in the main view 
//========================================================================================
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import * as colors from "../utils/Colors"

export default class DeckItem extends React.Component {


  deckPressed = ()=>{
        //on pressing a deck in the list should transition to detailed view of that deck 
        this.props.navigateToDeckView("DeckView", {deck: this.props.deck, 
                                                   updateMainListOfDecks: this.props.updateMainListOfDecks})
  }


  render() {

    const numberOfCards = this.props.deck.questions.length
    let cardText = "cards"
    if (numberOfCards===1){
        cardText = "card"
    }


    return (
      <TouchableOpacity style={styles.deckItem} onPress={this.deckPressed}>
          
            <Text  style={styles.header}>{this.props.deck.title}</Text>
            <Text  style={styles.header2}>{numberOfCards + " " + cardText}</Text>
           
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
    deckItem: {
    flex: 1,
    backgroundColor: colors.GRAY2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 5,
    borderStyle: 'solid',
    borderColor: 'black', 
    borderWidth: 2, 
    borderRadius: 5, 
    padding: 9, 
    minWidth: 250
  },
   
  header: {
    fontSize: 20, 
    fontWeight: "bold"
  }, 

  header2: {
    fontSize: 14, 
    fontStyle: "italic", 
    textAlign: "center"
  }
});