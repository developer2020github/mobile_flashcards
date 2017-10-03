//this component will handle a view for addition of new deck. 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View , StyleSheet } from 'react-native';
import CommonButton from "./CommonButton"

export default class NewDeckView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'New deck' };
  }

  submitNewDeckPress = ()=>{
    console.log("Submit new deck pressed")
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>New deck</Text>
      <Text style={styles.textInputHeader}>Enter new deck title:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <CommonButton onPress={this.submitNewDeckPress} text={"CREATE A NEW DECK"} btnBackgroundColor="yellow"/>
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