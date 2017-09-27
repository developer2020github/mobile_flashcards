//this file handles a deck item view for list of decks in the main view 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckItem extends React.Component {
  render() {
    return (
      <View style={styles.deckItem}>
        <Text>{this.props.deck.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    deckItem: {
    flex: 1,
    backgroundColor: '#ccccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});