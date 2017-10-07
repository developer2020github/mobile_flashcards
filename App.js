import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView'
import NewDeckView from "./components/NewDeckView"
import DeckView from "./components/DeckView"
import QuizView from "./components/QuizView"
import NewCardView from "./components/NewCardView"

import { populateLocalStorage, newDeck } from "./utils/Decks"
import { StackNavigator } from 'react-navigation'
import { setLocalNotification } from  "./utils/Notifications"

//const ShowMainView = true
//keep this for testing purposes so that local storage is not empty
populateLocalStorage()
//setLocalNotification()

const MainStackNavigatorRoutesConfig = {
    MainView: {
        screen: MainView, 
        navigationOptions: {
          title: "Mobile flashcards"
        }
        
    }, 

    NewDeckView: {
        screen: NewDeckView, 
        navigationOptions: {
            title: "Mobile flashcards: New Deck"
          }
    }, 

    DeckView: {
        screen: DeckView, 
        navigationOptions: {
            title: "Mobile flashcards: Deck"
          }
    }, 

    QuizView: {
        screen: QuizView, 
        navigationOptions: {
            title: "Mobile flashcards: Quiz"
          }
    }, 

    NewCardView: {
        screen: NewCardView, 
        navigationOptions: {
            title: "Mobile flashcards: New Card"
          }
    }
}


const MainStackNavigatorConfig = {
    initialRouteName: "MainView", 
    navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black", 
          marginTop: 20, 
         
        }, 
        headerTitleStyle:{
            fontSize: 15  
        }
      }
}

const AppMainStackNavigator = StackNavigator(MainStackNavigatorRoutesConfig, MainStackNavigatorConfig)

export default class App extends React.Component {
    
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return(
      <AppMainStackNavigator />
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
