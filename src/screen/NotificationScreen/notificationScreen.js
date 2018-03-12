import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './notificationStyle';
export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Notification Screen </Text>
      </View>
    )
  }
};