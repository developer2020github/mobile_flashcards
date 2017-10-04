//this will display quiz view 
/*
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"

const QUIZ_STATES = {
	IN_PROGRESS: 'IN_PROGRESS', 
    COMPLETE: "COMPLETE", 
    SHOWING_ANSWER: "SHOWING_ANSWER", 
    SHOWING_QUESTION: "SHOWING_QUESTION"
}


export default class DeckView extends Component {
    state = {
        quizState : QUIZ_STATES.IN_PROGRESS, 
        quizViewState: QUIZ_STATES.SHOWING_QUESTION,  
        currentQuestionIdx: 0, 
        numberOfCorrectAnswers: 0, 
        totalNumberOfcards: 0, 

      }


    componentDidMount(){
        this.setState({totalNumberOfCards: this.props.deck.questions.length, 
                       quizViewState: QUIZ_STATES.SHOWING_QUESTION
        })
    }


  showAnswerPress = ()=>{
    console.log("show answer pressed")
  }

  addNewCardPress = ()=>{
    console.log("add new card pressed")
  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.header2}>{"quiz in progress:"}</Text>
        <Text style={styles.header2}>{this.props.deck.title}</Text>
        <Text style={styles.header}>{this.props.deck.questions[this.state.currentQuestionIdx].question}</Text>
        if this 
        <CommonButton onPress={this.showAnswerPress} text={"Show answer"} btnBackgroundColor="white"/>
        <CommonButton onPress={this.correctPress} text={"Correct"} btnBackgroundColor="#d0d9e8"/>
        <CommonButton onPress={this.incorrectPress} text={"Incorrect"} btnBackgroundColor="#a7ea70"/>

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

});*/