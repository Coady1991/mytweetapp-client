export default class TweetService {

  tweets = [];

  tweet(text) {
    let tweet = {
      tweet: text
    };
    this.tweets.push(tweet);
    console.log(tweet);
  }
}
