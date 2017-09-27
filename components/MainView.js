//this is the main view of the application ; shows list of available decks and an option to 
//add a new one
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});