/**
 * @flow
 */


import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import {
  Button
} from 'react-native-elements';

import RssFeedManager from './managers/RssFeedManager';


export default class App extends Component {

  constructor() {
    super();
    this.rssParser = new RssFeedManager('http://dealwithjs.io/rss');
    console.log(this.rssParser.getFeedUrl());
  }

  componentDidMount() {
    this.rssParser.getFeedData().then((data)=>{
      console.log("App.js:" + data);
    });
  }

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
