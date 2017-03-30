/**
 * @flow
 */

import rssParser from 'feedparser';


export default class RssFeedManager {
  constructor(feedUrl) {
    this.feedUrl = feedUrl;
    this.parsedFeedData = null;
  }

  getFeedUrl() {
    return this.feedUrl;
  }

  getFeedData() {
    return fetch(this.feedUrl).then((resp) => {
      if(response.status == 200) {
        this.parsedFeedData = resp;
      }
      else {
        this.parsedFeedData = null;
      }

      return this.parsedFeedData;
    }).catch((error) => {
      console.error(error);
      this.parsedFeedData = null;
    }).done();
  }
}
