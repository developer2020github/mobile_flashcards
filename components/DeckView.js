//this component will display a particular deck 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet, Animated } from 'react-native';
import CommonButton from "./CommonButton"
import * as colors from "../utils/Colors"
import * as api from "../utils/api"

export default class DeckView extends Component {

    state = {
        bounceValue: new Animated.Value(1), 
        deck: null
    }
 
  startQuizPress = ()=>{
    this.props.navigation.navigate("QuizView", {deck: this.state.deck}); 
  }

  addNewCardPress = ()=>{
    this.props.navigation.navigate("NewCardView", {deck: this.state.deck}); 
  }

  componentDidMount(){
      //syncronize with local storage 
      const deck = this.props.navigation.state.params.deck
      let updateDeck = (updatedDeck)=>{
          this.setState({deck: updatedDeck})
      }

      api.getDeck(deck.title, updateDeck)
  }

  render() {

    const deck = this.state.deck
    if (!deck){
        return (
            <View style={styles.container}>
              <Text style={styles.header2}>Loading....</Text>
            </View>)
    }
    
    const numberOfCards = deck.questions.length
    let startOfQuizButton = <CommonButton onPress={this.startQuizPress} text={"Start quiz"} btnBackgroundColor={colors.GREEN1}/>
    if (numberOfCards<1){
        //user should not be able to go into quiz view if there are no questions in the deck yet
        startOfQuizButton = null
    }
    const bounceValue = this.state.bounceValue
    Animated.sequence([
        Animated.timing(bounceValue, { duration: 100, toValue: 2.0}),
        Animated.timing(bounceValue, { duration: 100, toValue: 1.0}),
      ]).start()

    return (
      <View style={styles.container}>
        <Text style={styles.header2}>{"Selected deck:"}</Text>
         
        <Animated.Text
            style={[styles.header, {transform: [{scale: bounceValue}]}]}>
              {deck.title}
        </Animated.Text>

        <Text style={styles.header}>{numberOfCards + " cards"}</Text>
        {startOfQuizButton}
        <CommonButton onPress={this.addNewCardPress} text={"Add a new card"} btnBackgroundColor={colors.BLUE1}/>
        

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