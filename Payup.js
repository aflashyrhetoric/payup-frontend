import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import { C_PRIMARY, C_BLACK, C_WHITE } from './styles/colors';
import ExpenseListItem from './ExpenseListItem';

export default class Payup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };

    this.styles = StyleSheet.create({
      Page: {
        flex: 1,
        padding: 40,
        backgroundColor: C_PRIMARY,
      },
      PageHeader: {
        fontSize: 24,
        padding: 15,
        color: C_WHITE,
      },
      ExpenseList: {
        backgroundColor: '#fff',
        padding: 25,
      },
    });
  }

  componentWillMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    const baseURL = "http://192.168.1.231:8114";
    const endpoint = 'api/v1/expenses';

    fetch(`${baseURL}/${endpoint}`)
      .then(res => res.json())
      .then(responseData => this.setState({ expenses: responseData.data}))
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <View style={this.styles.Page}>
        <Text style={this.styles.PageHeader}>Welcome to Payup: Alpha</Text>
        <FlatList style={this.styles.ExpenseList}
          data={this.state.expenses}
          renderItem={({ item }) => <ExpenseListItem text={item.description}/>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
