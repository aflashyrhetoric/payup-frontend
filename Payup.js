import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

export default class Payup extends Component {
  constructor(props) {
    super(props);

    this.initialFetch();
    this.state = {
      expenseData: [],
      responseStatus: 200
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.expenseData}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
        <Text>{this.state.responseStatus}</Text>
      </View>
    );
  }

  initialFetch() {
    // const baseURL = 'http://192.168.1.236';
    // const endpoint = 'api/v1/expenses';
    const baseURL = "https://jsonplaceholder.typicode.com";
    const endpoint = "posts";

    fetch(`${baseURL}/${endpoint}`)
      .then(function(response) {
        if (response.status !== 200) {
          this.setState({ responseStatus: response.status });
          console.log("Looks like there was a problem: " + response.status);
        }
        response
          .json()
          .then(responseData => {
            this.setState({ expenseData: responseData });
          })
          .catch(err => console.error(err));
      })
      .catch(function(err) {
        console.error(err);
      });
  }
}
