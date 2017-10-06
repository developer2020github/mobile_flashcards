//this is the main view of the application ; shows list of available decks and an option to 
//add a new one
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Decks, newDeck } from "../utils/Decks"
import { listOfObjectsToArray } from "../utils/lib"
import DeckItem from "./DeckItem"
import CommonButton from "./CommonButton"
import ClearAllDecks from "./ClearAllDecks"
import * as api from "../utils/api"
import * as colors from "../utils/Colors"

//{listOfDecks.map((deck, index)=>{return <DeckItem deck={deck} key={index}/>})}

export default class MainView extends React.Component {
  state = {
    decks : {}
  }

  addNewDeckPress = () =>{
      this.props.navigation.navigate("NewDeckView"); 
  }

  clearAllDecksPress = () =>{

    api.removeAllDecks()
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
    let listOfDecks = listOfObjectsToArray(this.state.decks)
    
    return (
      <View style={styles.container}>
        <CommonButton onPress={this.addNewDeckPress} text={"Add new deck"} btnBackgroundColor={colors.BLUE1}/>
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