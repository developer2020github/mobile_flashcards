//========================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================================================

//========================================================================================
//This component displays the main view of the application: list of 
//decks to select from and a button to add new deck. 
//There are also several optional buttons to help with debugging and testing; 
//the can be enabled by setting corresponding flags to true. Refer to debug options
//for further details. 
//========================================================================================
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Decks, newDeck } from "../utils/Decks"
import { listOfObjectsToArray } from "../utils/lib"
import DeckItem from "./DeckItem"
import CommonButton from "./CommonButton"
import * as api from "../utils/api"
import * as colors from "../utils/Colors"
import * as Notifications from "../utils/Notifications"
import * as decks from "../utils/Decks"


//========================================================================================
//Debug options
//========================================================================================
const showNotificationsGUI = false //This flag is used for debugging local notifications ; 
                                   //when it is set to TRUE application will show  extra buttons
                                   //they call notification- related functions directlty

const showStorageGUI = true       //This flag is used for showing buttons that directly control 
                                  //local storage for testing/debugging purposes
                                  //1. user can clear it 
                                  //2. user can populate it with some hard-coded pre-defined decks 




export default class MainView extends React.Component {
  state = {
    decks : null
  }


  addNewDeckPress = () =>{
      this.props.navigation.navigate("NewDeckView"); 
  }


  clearAllDecksPress = () =>{
    api.removeAllDecks()
    this.setState({decks: null})
  }


  activateNotifcationsPress = () =>{
    Notifications.setLocalNotification()
  }


  clearNotificationsPermissionsPress = () =>{
    Notifications.clearNoticationPermission()
  }


  clearNotificationsDataPress = ()=>{
    Notifications.clearLocalNotification()
  }
  

  populateDecksPress = ()=>{
    decks.populateLocalStorage()
    this.updateMainListOfDecks()
  }

  renderDeck = ({item}) =>{
    return <DeckItem deck={item} navigateToDeckView={this.props.navigation.navigate} updateMainListOfDecks={this.updateMainListOfDecks}/>
 }

 updateMainListOfDecks = ()=>{

    const decksPromise = api.getAllDecks(); 
    decksPromise.then((results) => {
    const data = JSON.parse(results)
    this.setState({decks: data})
    
  })

 }
 componentDidMount(){
    this.updateMainListOfDecks()
 }
 
  render() {
    
    let clearStorageBtn = <CommonButton onPress={this.clearAllDecksPress} text={"Delete all decks"} btnBackgroundColor={colors.RED1}/>
    if (!this.state.decks){
        clearStorageBtn = false
    }

    let localStorageControlGUI  = null 

    if (showStorageGUI){
        localStorageControlGUI= 
        <View>
            {clearStorageBtn}
            <CommonButton onPress={this.populateDecksPress} text={"Populate with predefined decks"} btnBackgroundColor={colors.GREEN1}/>
        </View>
    }


    if (!this.state.decks){
        return (
            <View style={styles.container}>
             <Text style={styles.header}>Welcome to mobile flashcards!</Text>
             <CommonButton onPress={this.addNewDeckPress} text={"Add new deck"} btnBackgroundColor={colors.BLUE1}/>
             {localStorageControlGUI}
            </View>
          );
    }

    let listOfDecks = listOfObjectsToArray(this.state.decks)
    let notificationDebugButtons = null
    if (showNotificationsGUI) {
        notificationDebugButtons = 
            <View>
                <CommonButton onPress={this.activateNotifcationsPress} text={"Activate daily notifications"} btnBackgroundColor={colors.GREEN1}/>
                <CommonButton onPress={this.clearNotificationsPermissionsPress} text={"Clear daily notifications permissions"} btnBackgroundColor={colors.RED1}/>
                <CommonButton onPress={this.clearNotificationsDataPress} text={"Clear all notifications data"} btnBackgroundColor={colors.RED1}/>
            </View>
        }

  
    
    return (
      <View style={styles.container}>
        <CommonButton onPress={this.addNewDeckPress} text={"Add new deck"} btnBackgroundColor={colors.BLUE1}/>
        <FlatList
        data={listOfDecks}
        renderItem={this.renderDeck}
        keyExtractor={item => item.title}
         />
         {notificationDebugButtons}
         {localStorageControlGUI}
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

  header: {
    fontSize: 20, 
    fontWeight: "bold"
  }, 
});