import {inject} from 'aurelia-framework';
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class Tweet {

  tweet = '';

  constructor(ds) {
    this.tweetService = ds;
  }

  makeTweet() {
    this.tweetService.tweet(this.tweet);
  }
}
