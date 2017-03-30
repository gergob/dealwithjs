/**
 * @flow
 */

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
      console.log(resp.status);
      if(resp.status == 200) {
        this.parsedFeedData = resp.text();
      }
      else {
        this.parsedFeedData = null;
      }

      return this.parsedFeedData;
    }).catch((error) => {
      console.error(error);
      this.parsedFeedData = null;
    });
  }
}
