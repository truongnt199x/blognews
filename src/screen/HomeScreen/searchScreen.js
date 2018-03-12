import React, { Component,Fragment } from 'react';
import { Text, View, Dimensions,TextInput } from 'react-native';
import {SearchBar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
class HeaderInput extends Component{
    state = {
        text:""
    }
    render(){
        return (
            <Fragment>
            <Icon name="ios-search-outline" size={17} style={{paddingRight:10}}/>
            <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{width:Dimensions.get('window').width * 0.55,height:"70%",borderBottomWidth:0.7,borderBottomColor:"#dbdbdb"}}
            placeholder="Search DevNews"
            />
            </Fragment>
        );
    }
}

export default class SearchScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
        headerStyle: {height:Dimensions.get('window').height * 0.08},
        headerTitle:<HeaderInput/>
    }
  }

  render() {
    return (
      <View>
        <Text> Search </Text>
        
      </View>
    )
  }
}