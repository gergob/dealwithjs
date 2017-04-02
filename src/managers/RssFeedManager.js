/**
 * @flow
 */

import XmlToJS from 'xml2js';

export default class RssFeedManager {

  constructor(feedUrl) {
    this.feedUrl = feedUrl;
    this.parsedFeedData = null;
  }

  getFeedUrl() {
    return this.feedUrl;
  }

  getFeedData(callback, errCallback) {
    return fetch(this.feedUrl).then((resp) => {
      if(resp.status == 200) {
        resp.text().then((str) => {
          XmlToJS.parseString(str, (err, data) => {
            //console.log(JSON.stringify(data, null, 2));
            if(err && errCallback) {
              this.parsedFeedData = null;
              errCallback(err);
            }

            this.parsedFeedData = data;

            if(callback) {
              callback(this.parsedFeedData);
            }
          });
        });
      }
      else {
        this.parsedFeedData = null;
        if(errCallback) {
          errCallback('Response Status is:' + resp.status);
        }
      }
    }).catch((error) => {
      this.parsedFeedData = null;
      if(errCallback) {
        errCallback(error);
      }
    });
  }
}
