//this is the main view of the application ; shows list of available decks and an option to 
//add a new one
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Decks, newDeck } from "../utils/Decks"
import { listOfObjectsToArray } from "../utils/lib"
import DeckItem from "./DeckItem"
import AddNewDeck from "./AddNewDeck"
import ClearAllDecks from "./ClearAllDecks"
import * as api from "../utils/api"

//{listOfDecks.map((deck, index)=>{return <DeckItem deck={deck} key={index}/>})}

export default class MainView extends React.Component {
  state = {
    decks : {}
  }

  addNewDeckPress = () =>{
   console.log(" adding new deck")
   api.AddDeck(newDeck)
  }

  clearAllDecksPress = () =>{
    console.log("clear all decks")
    api.removeAllDecks()
  }

  renderDeck = ({item}) =>{
    //return   <Text>{item.tite}</Text>
    return <DeckItem deck={item} />
 }

 componentDidMount(){
   
   //console.log("component just mounted!")
   const decksPromise = api.getAllDecks(); 
   decksPromise.then((results) => {
    const data = JSON.parse(results)
    //console.log("data from storage")
    //console.log(data)
    this.setState({decks: data})
    
  })

 }
 
  render() {
    let listOfDecks = listOfObjectsToArray(this.state.decks)
    //console.log("state from render")
    //console.log(this.state)
    //
    return (
      <View style={styles.container}>
        <Text>Main view</Text>
        <AddNewDeck onPress={this.addNewDeckPress}/>

        <FlatList
        data={listOfDecks}
        renderItem={this.renderDeck}
        keyExtractor={item => item.title}
         />

         <ClearAllDecks onPress={this.clearAllDecksPress}/>
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