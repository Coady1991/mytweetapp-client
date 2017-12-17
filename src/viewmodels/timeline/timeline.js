import {inject} from 'aurelia-framework';
import TweetService from '../../services/tweet-service';

@inject(TweetService)
export class Timeline {

  tweets = [];

  constructor(ds) {
    this.tweetService = ds;
    this.tweets = this.tweetService.tweets;
  }
}
