/**
 * @flow
 */

import React, { Component } from 'react';

import  {
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    StatusBar,
    ListView,
    RefreshControl
} from 'react-native';

import { Card, Button } from 'react-native-elements';

const PostList = React.createClass({
  getInitialState () {
    return {
      refreshing: false,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  },

  loadData() {
    var self = this;
    this.props.rssParser.getFeedData((data) => {
      //console.error(JSON.stringify(data.rss.channel[0].item, null, 2));
      self.setState({
         refreshing: false,
         dataSource: self.state.dataSource.cloneWithRows(data.rss.channel[0].item)
       });
    }, (err) => {
      console.error(err);
    });
  },

  componentWillMount () {
    this.loadData();
  },

  renderRow (rowData, sectionID) {
     //let self = this;
     //console.log("rowData:" + JSON.stringify(rowData, null, 2));
     //console.log(rowData["media:content"][0]["$"].url);
      let imageUri = rowData["media:content"][0]["$"].url;
      console.log("rowData.title:" + rowData.title);

     return (
         <Card
           title={rowData.title}
           image={{uri: imageUri}}>
           <Text style={{marginBottom: 10}}>
           {rowData.description}
           </Text>
           <View style={{flex:1, flexDirection:'column', justifyContent: 'space-between'}}>
            <Button
              icon={{name: 'reorder'}}
              backgroundColor='#F7DF1E'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress= {() => {
                console.log('clicked');
              }}
              title='Read' />
          </View>
         </Card>
     );

   },

  onListRefresh() {
    this.setState({
       refreshing: true,
       dataSource: this.state.dataSource
     });
    this.loadData();
  },


  render() {
    let self = this;
    return (
      <ListView
          refreshControl={
            <RefreshControl
              refreshing={self.state.refreshing}
              onRefresh={self.onListRefresh}
            />
          }
          renderRow={self.renderRow}
          dataSource={self.state.dataSource}>
      </ListView>
    );
  }

});

export default PostList;
