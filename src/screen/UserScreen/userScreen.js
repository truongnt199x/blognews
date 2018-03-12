import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './userScreenStyle';
export default class UserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> User Screen </Text>
      </View>
    )
  }
};