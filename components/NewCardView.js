//this component will handle addition of a new card to a deck 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"
import * as colors from "../utils/Colors"

export default class NewCardView extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '', 
                   answer: '' };
  }

  submitNewCardPress = ()=>{
    console.log("create new card pressed")
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.header}>New card</Text>
      <Text style={styles.header2}>{"Selected deck: " + this.props.deck.title}</Text>

      <View style={styles.textInputView}>
            <Text style={styles.textInputHeader}>Enter question:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(question) => this.setState({question})}
                value={this.state.question}
            />
      </View>
    
      <View style={styles.textInputView}>
        <Text style={styles.textInputHeader}>Enter correct answer:</Text>
        <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
        />
      </View>

      <CommonButton onPress={this.submitNewCardPress} text={"Create new card"} btnBackgroundColor={colors.BLUE1}/>
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