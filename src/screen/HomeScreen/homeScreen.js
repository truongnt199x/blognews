import React, { Component } from 'react';
import { Text, View,TouchableOpacity,Dimensions,FlatList } from 'react-native';
import styles from './homeScreenStyle';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { YellowBox } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Spinner from 'react-native-loading-spinner-overlay';
import CardNews from '../../components/HomeScreen/cardNews';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Warning: componentWillUpdate is deprecated'
]);

const CustomTitle = (props) => (<Text style={{fontSize:20,fontWeight:'bold'}}>DevNews</Text>);

class HeaderRight extends Component {
  _handleSearch = () => {
    this.props.navigate('SearchScreen');
  }
  render(){
    return (
      <TouchableOpacity onPress={this._handleSearch}>
        <Ionicons name="md-search" size={25} style={{paddingRight:10}} />
      </TouchableOpacity>
    );
  }
}


const _renderHeaderRight = (props) => (Wrapcomponent) => {
  return (<Wrapcomponent {...props}/>);
}
class HomeScreen extends Component {
  state = {
    data:[]
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:<CustomTitle/>,
      headerRight:_renderHeaderRight(navigation)(HeaderRight),
      headerStyle: {height:Dimensions.get('window').height * 0.08}
    }
  }
   async componentDidMount(){
    let dataRedux = await this.props.fetchData();
    if(dataRedux){
      console.log(this.props.data.data);
      this.setState(state => ({
        data:state.data.concat(this.props.data.data)
      }));
    }
  }

  render() {
    if(this.state.data.length===0){
      return (<Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} animation="fade" overlayColor="rgba(43, 40, 38, 0.5)"/>)
    }
    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item,index) => item.id.toString()}
            renderItem={({item}) => <CardNews {...item} navigation={this.props.navigation}/> }
          />
      </View>
    )
  }
};
const mapStateToProps = (state) => {
return {data:state.data }
};

export default connect(mapStateToProps,actions)(HomeScreen);