//this component will handle a view for addition of new deck. 
import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

export default class NewDeckView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter new deck title' };
  }

  render() {
    return (
      <View>
      <Text>New deck</Text>
      <Text>Enter new deck title</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
    );
  }
}