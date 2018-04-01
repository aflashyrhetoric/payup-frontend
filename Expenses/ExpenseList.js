import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { C_PRIMARY, C_BLACK, C_WHITE } from "./../styles/colors";
import { 
  StyleLink as S_Link,
  Component as S_Component,
} from "./../styles/components";
import ExpenseListItem from "./ExpenseListItem";
import PageHeader from "./../PageHeader";

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };

    this.styles = StyleSheet.create({
      ExpenseListHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 25,
      },
      ExpenseList: {
        backgroundColor: "#fff",
        padding: 25
      }
    });
  }

  componentWillMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    // const baseURL = "http://192.168.1.231:8114";
    const baseURL = "http://192.168.1.241:8114";
    const endpoint = "api/v1/expenses";

    fetch(`${baseURL}/${endpoint}`)
      .then(res => res.json())
      .then(responseData => this.setState({ expenses: responseData.data }))
      .catch(function(err) {
        console.error(err);
      });
  };

  render() {
    return (
      <View style={S_Component}>
        <PageHeader text="My Expenses" />
        <View>
          <Link to="/">
            <Text style={S_Link}>Dashboard</Text>
          </Link>
          <Link to="/newExpense">
            <Text style={S_Link}>+ New Expense</Text>
          </Link>
        </View>
        <Text style={this.styles.ExpenseListHeader}>Expenses</Text>
        <FlatList
          style={this.styles.ExpenseList}
          data={this.state.expenses}
          renderItem={({ item }) => <ExpenseListItem text={item.description} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
