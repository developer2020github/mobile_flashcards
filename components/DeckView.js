//this component will display a particular deck 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"
import * as colors from "../utils/Colors"

export default class DeckView extends Component {
 
    
  startQuizPress = ()=>{
    this.props.navigation.navigate("QuizView", {deck: this.props.navigation.state.params.deck}); 
  }

  addNewCardPress = ()=>{
    console.log("add new card pressed")
  }


  render() {

    const deck = this.props.navigation.state.params.deck
    const numberOfCards = deck.questions.length
    
    return (
      <View style={styles.container}>
        <Text style={styles.header2}>{"Selected deck:"}</Text>
        <Text style={styles.header}>{deck.title}</Text>
        <Text style={styles.header}>{numberOfCards + " cards"}</Text>

        <CommonButton onPress={this.addNewCardPress} text={"ADD NEW CARD"} btnBackgroundColor={colors.BLUE1}/>
        <CommonButton onPress={this.startQuizPress} text={"START QUIZ"} btnBackgroundColor={colors.GREEN1}/>

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
    marginTop: 100
  },

  header: {
    fontSize: 20, 
    marginBottom: 20, 
    fontWeight: "bold"
  }, 

  header2: {
    fontSize: 14, 
    marginBottom: 10, 
    fontStyle: "italic", 
    textAlign: "center"
  }

});