//this is the main view of the application ; shows list of available decks and an option to 
//add a new one
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


const showNotificationsGUI = false //this flag is used for debugging local notifications ; 
                                   //when it is set to TRUE application will show  extra buttons
                                   //they call notification- related functions directlty

const showStorageGUI = true      //this flag is used for showing buttons that directly control 
                                 //local storage for testing/debugging purposes
                                 //1. user can clear it 
                                 //2. user can populate it with some hard-coded pre-defined decks 
export default class MainView extends React.Component {
  state = {
    decks : {}
  }

  mainViewUpdate(){
      console.log("update main view!")
  }
  addNewDeckPress = () =>{
      this.props.navigation.navigate("NewDeckView"); 
  }


  clearAllDecksPress = () =>{
    api.removeAllDecks()
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
  }

  renderDeck = ({item}) =>{
    return <DeckItem deck={item} navigateToDeckView={this.props.navigation.navigate} />
 }


 componentDidMount(){
    const decksPromise = api.getAllDecks(); 
    decksPromise.then((results) => {
    const data = JSON.parse(results)
    this.setState({decks: data})
    
  })

 }
 
  render() {
    console.log("MainView render is called!")
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

    let localStorageControlGUI  = null 
    if (showStorageGUI){
        localStorageControlGUI= 
        <View>
            <CommonButton onPress={this.clearAllDecksPress} text={"Delete all saved decks"} btnBackgroundColor={colors.RED1}/>
            <CommonButton onPress={this.populateDecksPress} text={"Populate with predefined decks"} btnBackgroundColor={colors.GREEN1}/>
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
});