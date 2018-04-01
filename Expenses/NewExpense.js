import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from 'react-router-native'; 
import { C_PRIMARY, C_BLACK, C_WHITE } from './../styles/colors';
import {
  StyleLink as S_Link,
  Component as S_Component,
} from './../styles/components';
import ExpenseListItem from './ExpenseListItem';
import PageHeader from './../PageHeader';

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaser: '',
      beneficiaries: [],
      description: '',
      amount: 0
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

  render() {
    return (
      <View style={S_Component}>
        <PageHeader text="Add New Expense"/>
        <View>
          <Link to="/expenses">
          <Text style={S_Link}>
            Expenses
          </Text>
          </Link>
          <Link to="/newExpense">
          <Text style={S_Link}>
            + New Expense
          </Text>
          </Link>
        </View>

        <View>
          <Text>
            Who Paid?
          </Text>
          <Text>
            Who owes?
          </Text>
        </View>
      </View>
    );
  }
}
