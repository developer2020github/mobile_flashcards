//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This module defines stack navigator for the application 
//========================================================================================
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainView from './MainView'
import NewDeckView from "./NewDeckView"
import DeckView from "./DeckView"
import QuizView from "./QuizView"
import NewCardView from "./NewCardView"


import { StackNavigator } from 'react-navigation'


//View-specific cofiguration settings for the application main navigator 
//(stack navigator)
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
}; 


//Generic cofiguration settings for the application main navigator 
//(stack navigator)
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
      }, 

}

export const AppMainStackNavigator = StackNavigator(MainStackNavigatorRoutesConfig, MainStackNavigatorConfig)