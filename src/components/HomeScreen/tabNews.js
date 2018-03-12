import React, { Component } from 'react';
import { Text, View,StyleSheet,Dimensions,Image,ScrollView } from 'react-native';
import { Paper,Title,Paragraph } from 'react-native-paper';
const {width,height} = Dimensions.get('window');
export default class TabNews extends Component {
  state = {
    offset:0
  }
  // _handleOnScroll = (event) => {
  //   let currentOffset = event.nativeEvent.contentOffset.y;
  //   let direction = currentOffset > this.state.offset ? 'down':'up';
  //   console.log(direction);
  // } for check up or down scroll onScroll={this._handleOnScroll}
  render() {
    return (
        <ScrollView style={{backgroundColor: '#dbdbdb'}} >
        <Paper style={styles.paper}>
            <Title>{this.props.title}</Title>
            <Image source={{uri:this.props.image}} resizeMode="cover" style={{width:width*0.9,height:height*0.3}}/>
            <Paragraph>{this.props.body}</Paragraph>
        </Paper>
        </ScrollView>
    )
  }
};
const styles = StyleSheet.create({
    paper: {
     margin:8,
     padding: 8,
     width: width * 0.95,
     alignItems: 'center',
     justifyContent: 'center',
     },
  });