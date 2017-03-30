import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';

import {
  Button
} from 'react-native-elements';


export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Button
          icon={{name: 'cached'}}
          color='#FFF'
          backgroundColor='#EF4490'
          title='Test'
        />
      </View>
    );
  }
}
