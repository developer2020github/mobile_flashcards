//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This component handles an addition of a new deck (set of questions/answers)
//user gets one text input field to enter a title for new deck; 
// basic input check is performed (ensuring title is not empty
// before proceeding to submittion into the AsyncStorage.
//If user is trying to submit an empty deck title - they will get 
//a warning message displayed in red.
//========================================================================================
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet, Keyboard } from 'react-native';
import CommonButton from "./CommonButton"
import * as api from "../utils/api"
import * as colors from "../utils/Colors"

export default class NewDeckView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', 
                   displayTitleWarning: false };
  }

  submitNewDeckPress = ()=>{
    //console.log("Submit new deck pressed")
    if (this.state.text.trim()===""){
        this.setState({displayTitleWarning: true})
    }else{
        this.setState({displayTitleWarning: false})
        api.addEmptyDeck(this.state.text)
        Keyboard.dismiss()
        this.props.navigation.navigate("MainView") 
    }

  }

  render() {
    let warning = null
    if (this.state.displayTitleWarning){
        warning = " * cannot be empty"
    }

    return (
      <View style={styles.container}>
      <Text style={styles.header}>New deck</Text>
      <Text style={styles.textInputHeader}>Enter new deck title:
        <Text style={{color: 'red'}}>
          {warning}
        </Text>
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <CommonButton onPress={this.submitNewDeckPress} text={"Create deck"} btnBackgroundColor={colors.BLUE1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  header: {
    fontSize: 20, 
    marginBottom: 20, 
    fontWeight: "bold"
  },

  textInputHeader: {
    width: 250
  }, 

  textInput: {
    width: 250, 
    borderColor: 'black',
    borderWidth: 2
  }
});