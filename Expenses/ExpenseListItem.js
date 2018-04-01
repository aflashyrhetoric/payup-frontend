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
      ExpenseListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      ExpenseListItem: {
        fontSize: 22,
      },
    });
  }

  formatPrice = (price) => {
    let newPrice = price;
    newPrice = newPrice.toString().split('');
    newPrice.splice(newPrice.length - 2, 0, '.');
    newPrice = newPrice.join('');
    return newPrice;
  }

  render() {
    return (
      <View style={this.styles.ExpenseListContainer}>
        <View>
          <Text style={this.styles.ExpenseListItem}>
            {this.props.expense.description}
            {console.log(this.props.expense)}
          </Text>

          <Text style={this.styles.ExpenseListItem}>
            $ {this.formatPrice(this.props.expense.amount)}
          </Text>
        </View>
      </View>
    );
  }
}