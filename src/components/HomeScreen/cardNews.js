import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Dimensions } from 'react-native';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';
const {width,height} = Dimensions.get('window');
export default class CardNews extends Component { 
    _navigateToDetail = () => {
        this.props.navigation.navigate('DetailScreen',{
            image:this.props.image,
            title:this.props.title,
            body:this.props.body
        });
    }
  render() {
    return (
        <Card>
            <TouchableOpacity onPress={this._navigateToDetail}>
                <CardCover source={{uri:this.props.image}} resizeMode="contain" style={{height:height*0.3}}/>
                <CardContent>
                    <Title>{this.props.title}</Title>
                    <Text numberOfLines={1}>{this.props.body}</Text>
                </CardContent>
            </TouchableOpacity>
        </Card>
    )
  }
}