import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

export default class Payup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.expenses}
          renderItem={({ item }) => <Text>{item.description}</Text>}
        />
      </View>
    );
  }

  initialFetch = () => {
    // const baseURL = 'http://192.168.1.236';
    const baseURL = "http://192.168.1.231:8114";
    const endpoint = 'api/v1/expenses';

    fetch(`${baseURL}/${endpoint}`)
      .then(res => res.json())
      .then(responseData => this.setState({ expenses: responseData.data}))
      .catch(function(err) {
        console.error(err);
      });
  }
}
