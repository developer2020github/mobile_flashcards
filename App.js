import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView'
import NewDeckView from "./components/NewDeckView"

const ShowMainView = true

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
