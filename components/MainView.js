//this is the main view of the application ; shows list of available decks and an option to 
//add a new one
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Decks } from "../utils/Decks"
import { listOfObjectsToArray } from "../utils/lib"
import DeckItem from "./DeckItem"
import AddNewDeck from "./AddNewDeck"
//{listOfDecks.map((deck, index)=>{return <DeckItem deck={deck} key={index}/>})}

export default class MainView extends React.Component {
  addNewDeckPress = () =>{

  }

  renderDeck = ({item}) =>{
    //return   <Text>{item.title}</Text>
    return <DeckItem deck={item} />
 }
 
  render() {
    let listOfDecks = listOfObjectsToArray(Decks)
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