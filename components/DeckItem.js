//this file handles a deck item view for list of decks in the main view 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckItem extends React.Component {
  deckPressed = ()=>{
    this.props.navigateToDeckView("DeckView", {deck: this.props.deck})
  }
  render() {
    return (
      <TouchableOpacity style={styles.deckItem} onPress={this.deckPressed}>
        <Text>{this.props.deck.title}</Text>
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
});