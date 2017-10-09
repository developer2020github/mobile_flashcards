//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This component handles an addition of a new question card to a deck: 
//user gets two text inputs; a basic input checks are performed (ensuring question 
//and answer are not empty) before proceeding to submittion into the AsyncStorage.
//If user is trying to submit an empty question or an empty answer - they will get 
//a warning message displayed in red.   
//========================================================================================
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import CommonButton from "./CommonButton"
import * as colors from "../utils/Colors"
import * as api from "../utils/api"

export default class NewCardView extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '', 
                   answer: '', 
                   displayQuestionWarning: false, 
                   displayAnswerWarning: false };
  }

  submitNewCardPress = ()=>{
    //console.log("create new card pressed")
    const deck = this.props.navigation.state.params.deck
    let inputIsValid = true

    if (this.state.question.trim()===""){
       this.setState({displayQuestionWarning: true})
       inputIsValid=false
    }else{
       this.setState({displayQuestionWarning: false})
    }

    if (this.state.answer.trim()===""){
        this.setState({displayAnswerWarning: true})
        inputIsValid= false
     }else{
        this.setState({displayAnswerWarning: false})
     }

     if (inputIsValid){
         api.addQuestion(deck.title, this.state.question, this.state.answer)
         .then(()=>{this.props.navigation.state.params.updateMainListOfDecks()
                    this.props.navigation.state.params.updateParentDeck()
                    Keyboard.dismiss()
                    this.props.navigation.navigate("DeckView",  {deck: deck})})
     }

  }

  render() { 
    const deck = this.props.navigation.state.params.deck
    let questionWarning = null
    if (this.state.displayQuestionWarning){
       questionWarning = " * cannot be emtpy"
    }

    let answerWarning = null
    if (this.state.displayAnswerWarning){
        answerWarning = " * cannot be empty "
    }

    return (
      <KeyboardAvoidingView style={styles.container}>

      <Text style={styles.header}>New card</Text>
      <Text style={styles.header2}>{"Selected deck: " + deck.title}</Text>

      <View style={styles.textInputView}>
            <Text style={styles.textInputHeader}>Enter question:
                <Text style={{color: 'red'}}>
                     {questionWarning}
                </Text>
            </Text>

            <TextInput
                style={styles.textInput}
                onChangeText={(question) => this.setState({question})}
                value={this.state.question}
            />
      </View>
    
      <View style={styles.textInputView}>
        <Text style={styles.textInputHeader}>Enter correct answer:
                <Text style={{color: 'red'}}>
                     {answerWarning}
                </Text>
        </Text>
        <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
        />
      </View>

      <CommonButton onPress={this.submitNewCardPress} text={"Create new card"} btnBackgroundColor={colors.BLUE1}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
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
  }, 

  textInputHeader: {
    width: 250
  }, 

  textInput: {
    width: 250, 
    borderColor: 'black',
    borderWidth: 2, 
    borderRadius: 5
  }, 

  textInputView: {
    marginTop: 10
  }
});