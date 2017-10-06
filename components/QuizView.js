//this component will display quiz view 

import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"
import * as colors from "../utils/Colors"

const QUIZ_STATES = {
	IN_PROGRESS: 'IN_PROGRESS', 
    COMPLETE: "COMPLETE"
}

const QUIZ_VIEW_STATES = { 
    SHOWING_ANSWER: "SHOWING_ANSWER", 
    SHOWING_QUESTION: "SHOWING_QUESTION"
}

export default class DeckView extends Component {
    state = {
        quizState :    QUIZ_STATES.IN_PROGRESS, 
        quizViewState: QUIZ_VIEW_STATES.SHOWING_QUESTION,  
        currentQuestionIdx: 0, 
        numberOfCorrectAnswers: 0, 
        totalNumberOfCards: 0
      }
    
    resetQuiz=()=>{
        const deck = this.props.navigation.state.params.deck; 
        this.setState({totalNumberOfCards: deck.questions.length, 
            quizState :    QUIZ_STATES.IN_PROGRESS, 
            quizViewState: QUIZ_VIEW_STATES.SHOWING_QUESTION, 
            currentQuestionIdx: 0, 
            numberOfCorrectAnswers: 0, 
    })

    }

    componentDidMount(){
       this.resetQuiz()
    }


  showAnswerPress = ()=>{
    this.setState({quizViewState: QUIZ_VIEW_STATES.SHOWING_ANSWER})
  }
  
  showQuestionPress = ()=>{
    this.setState({quizViewState: QUIZ_VIEW_STATES.SHOWING_QUESTION})
  }

  advanceQuestion = () =>{   
    if (this.state.currentQuestionIdx>=(this.state.totalNumberOfCards-1)){
 
      this.setState({quizState :    QUIZ_STATES.COMPLETE})
    }else{
      this.setState((prevState, props) => {
        return {currentQuestionIdx: prevState.currentQuestionIdx + 1};
      });
    }

  }

  correctPress = ()=>{

    this.setState((prevState, props) => {
      return {numberOfCorrectAnswers: prevState.numberOfCorrectAnswers + 1};
    });

    this.advanceQuestion()
  }

  incorrectPress = ()=>{
   this.advanceQuestion()
  }

  
  render() {

    const deck = this.props.navigation.state.params.deck; 
    
    if (this.state.quizState===QUIZ_STATES.COMPLETE){
      const persentageOfCorrectAnswers = (this.state.numberOfCorrectAnswers/this.state.totalNumberOfCards)*100
      return <View style={styles.container}>
      
      <Text style={styles.header2}>{deck.title + " quiz is complete"}</Text>

      <Text style={styles.header}>{"You scored " + persentageOfCorrectAnswers + "%"}</Text>
      
      <CommonButton onPress={this.resetQuiz} text={"Reset quiz"} btnBackgroundColor={colors.BLUE1}/>
    </View>
    }

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.header2}>{"quiz in progress:"}</Text>
        <Text style={styles.header2}>{deck.title}</Text>
        <Text style={styles.header2}>{"Question " + (this.state.currentQuestionIdx+1) + "/" + this.state.totalNumberOfCards }</Text>
        </View>
        {this.state.quizViewState===QUIZ_VIEW_STATES.SHOWING_QUESTION

        ? <View style={styles.btnAlign}>
          <Text style={styles.header}>{deck.questions[this.state.currentQuestionIdx].question}</Text>
          <CommonButton onPress={this.showAnswerPress} text={"Show answer"} btnBackgroundColor={colors.WHITE}/>
          </View>

        :  <View style={styles.btnAlign}>
          <Text style={styles.header}>{deck.questions[this.state.currentQuestionIdx].answer}</Text>
          <CommonButton onPress={this.showQuestionPress} text={"Show question"} btnBackgroundColor={colors.WHITE}/>
          </View>
        }  

        <CommonButton onPress={this.correctPress} text={"Correct"} btnBackgroundColor={colors.GREEN1}/>
        <CommonButton onPress={this.incorrectPress} text={"Incorrect"} btnBackgroundColor={colors.RED1}/>
        <CommonButton onPress={this.resetQuiz} text={"Reset quiz"} btnBackgroundColor={colors.BLUE1}/>
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

  btnAlign:{
    alignItems: 'center'
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