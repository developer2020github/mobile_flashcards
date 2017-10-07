//this file handles a deck item view for list of decks in the main view 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';

export default class DeckItem extends React.Component {

  deckPressed = ()=>{
    //add some animation 
        this.props.navigateToDeckView("DeckView", {deck: this.props.deck})
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
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 5,
    borderStyle: 'solid',
    borderColor: 'black', 
    borderWidth: 2, 
    borderRadius: 5, 
    padding: 9
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