import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from 'react-router-native'; 
import { C_PRIMARY, C_BLACK, C_WHITE } from './styles/colors';
import { StyleLink as S_Link } from './styles/components';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      PageHeaderContainer: {
        backgroundColor: C_PRIMARY,
        padding: 15,
      },
      PageHeaderText: {
        color: C_WHITE,
        textAlign: 'center',
        fontSize: 40
      },
    });
  }

  render() {
    return (
      <View style={this.styles.PageHeaderContainer}>
        <Text style={this.styles.PageHeaderText}>{this.props.text}</Text>
      </View>
    );
  }
}
