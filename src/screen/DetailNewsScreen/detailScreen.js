import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FirstRoute from '../../components/HomeScreen/tabNews';
import SecondRoute from '../../components/HomeScreen/responseNews';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };
  
export default class DetailScreen extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: "News" },
          { key: 'second', title: 'Response' },
        ],
      };
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title:params.title,
            headerStyle:{height:Dimensions.get('window').height * 0.08}
        }
     }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} style={{backgroundColor:"#fff"}} labelStyle={{color:'#000'}} indicatorStyle={{backgroundColor:"black"}}/>;

    _renderScene = ({route}) => {
        switch(route.key){
            case 'first':
            return <FirstRoute title={this.props.navigation.state.params.title} body={this.props.navigation.state.params.body} image={this.props.navigation.state.params.image}/>;
            case 'second':
            return <SecondRoute/>;
            default :
            return null;
        }
    }
    render() {
        return (
            <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  