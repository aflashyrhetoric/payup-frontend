import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import { C_PRIMARY, C_BLACK, C_WHITE } from './../styles/colors';

export default class ExpenseListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };

    this.styles = StyleSheet.create({
      ExpenseListItem: {
        fontSize: 22,
      },
    });
  }

  render() {
    return (
        <Text style={this.styles.ExpenseListItem}>{this.props.text}</Text>
    );
  }
}