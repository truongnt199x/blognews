import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RootNavigation from './src/navigations/tabConfigure';
import { Provider as PaperProvider } from 'react-native-paper';
import {Provider} from 'react-redux';
import configureStore from './src/stores/custom-store';
import {SignedOut} from './src/navigations/stackConfigure';
const store = configureStore();
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <PaperProvider>
            <SignedOut/>
          </PaperProvider>
        </Provider>
    )
  }
}