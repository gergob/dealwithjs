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

  }

  componentDidMount() {
    this.rssParser.getFeedData((data) => {
      //console.log('XXXXX:' + data.rss.channel[0].title);
      //
      // TODO: add data handling logic
      //
    }, (err) => {
      console.error(err);
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
