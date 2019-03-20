import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { styles } from '../styles';

export default class TestScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Test Screen!</Text>
      </View>
    );
  }
}