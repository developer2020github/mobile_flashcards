import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView'
import NewDeckView from "./components/NewDeckView"
import DeckView from "./components/DeckView"
import QuizView from "./components/QuizView"
import NewCardView from "./components/NewCardView"

import { populateLocalStorage, newDeck } from "./utils/Decks"
import { StackNavigator } from 'react-navigation'

//const ShowMainView = true
//keep this for testing purposes so that local storage is not empty
populateLocalStorage()

const MainStackNavigatorRoutesConfig = {
    MainView: {
        screen: MainView
        
    }, 

    NewDeckView: {
        screen: NewDeckView
    }, 

    DeckView: {
        screen: DeckView
    }, 

    QuizView: {
        screen: QuizView
    }, 

    NewCardView: {
        screen: NewCardView
    }
}


const MainStackNavigatorConfig = {
    initialRouteName: "MainView"
}

const AppMainStackNavigator = StackNavigator(MainStackNavigatorRoutesConfig, MainStackNavigatorConfig)

export default class App extends React.Component {

  render() {
    return(
      <AppMainStackNavigator />
    )
  /*  if (ShowMainView) {
      return (
        <MainView />
      )
    }
    return (
      <NewDeckView />
    )

    return  (
      <DeckView deck={newDeck} />
    )
		
	return (
			<QuizView deck={newDeck} />
  )
   return (
       <NewCardView deck={newDeck} />

   )*/
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
