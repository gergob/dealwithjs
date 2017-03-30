/**
 * @flow
 */

import React, { Component } from 'react';

import  {
    View,
    TouchableHighlight,
    StyleSheet,
    StatusBar,
    ListView,
    RefreshControl
} from 'react-native';

import RssFeedManager from './managers/RssFeedManager';
import PostList from './components/PostList';


export default class App extends Component {

  constructor() {
    super();
    this.rssParser = new RssFeedManager('http://dealwithjs.io/rss');
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
          <PostList rssParser = {this.rssParser} />
      </View>
    );
  }
}
