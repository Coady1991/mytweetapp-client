export default class TweetService {

  tweets = [];

  tweet(text) {
    let tweet = {
      tweet: text
    };
    this.tweet.push(tweet);
    console.log(tweet);
  }
}
