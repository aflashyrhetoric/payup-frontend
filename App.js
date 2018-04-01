import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native'; 
import { C_PRIMARY, C_BLACK, C_WHITE } from './styles/colors';
import Dashboard from './Dashboard';
import ExpenseList from './Expenses/ExpenseList';
import NewExpense from './Expenses/NewExpense';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      Page: {
        flex: 1,
        padding: 40,
        backgroundColor: C_PRIMARY,
      },
    });
  }
  render() {
    return (
      <Router>
        <View style={this.styles.Page}>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/expenses" component={ExpenseList}/>
          <Route exact path="/newExpense" component={NewExpense}/>
        </View>
      </Router>
    );
  }
}