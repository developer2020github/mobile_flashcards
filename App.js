import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView'
import NewDeckView from "./components/NewDeckView"
import { populateLocalStorage } from "./utils/Decks"


const ShowMainView = true
//keep this for testing purposes so that local storage is not empty
populateLocalStorage()

export default class App extends React.Component {

  render() {

    if (ShowMainView) {
      return (
        <MainView />
      )
    }
    return (
      <NewDeckView />
    )
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
