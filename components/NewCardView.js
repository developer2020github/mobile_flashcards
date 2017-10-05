//this component will handle addition of a new card to a deck 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"

export default class NewCardView extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '', 
                   answer: '' };
  }

  submitNewCardPress = ()=>{
    console.log("Submit new card pressed")
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>New card</Text>

      <Text style={styles.textInputHeader}>Enter question:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(question) => this.setState({question})}
        value={this.state.question}
      />

      <Text style={styles.textInputHeader}>Enter correct answer:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(answer) => this.setState({answer})}
        value={this.state.answer}
      />

      <CommonButton onPress={this.submitNewCardPress} text={"Create new card"} btnBackgroundColor="yellow"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop: 100
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