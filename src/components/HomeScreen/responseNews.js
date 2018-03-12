import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style/responseNewsStyle';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class ResponseNews extends Component {
  state = {
    data:[]
  }
  async componentDidMount(){
    const data = await this.props.fetchComment();
    if(data){
      this.setState(state => ({
        data:state.data.concat(data.payload)
      }));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Done! </Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  data:state.data
})
export default connect(mapStateToProps,actions)(ResponseNews);