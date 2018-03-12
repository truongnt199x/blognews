import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import styles from './style/signInStyle';
export default class SignIn extends Component {
  state = {
      email:"",
      password:""
  }
  _handleSignIn = () => {
      alert('done');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxSignIn}>
            <TextInput
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                autoFocus={true}
            />
            <TextInput
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
            />
            <View style={styles.userOptions}>
                <Text>Forgot account or password ?</Text>
                <View style={styles.lineDecoration}>
                    <View/>
                    <Text>Or</Text>
                    <View/>
                </View>
                <Text>You dont have an Account ?</Text>
            </View>
            <Button raised onPress={this._handleSignIn}>Sign In</Button>
        </View>
      </View>
    )
  }
};