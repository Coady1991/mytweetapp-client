import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';
import {PostsUpdate} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Fixtures, EventAggregator)
export default class TweetService {

  tweets = [];
  posts = 0;

  constructor(data, ea) {
    this.tweets = data.tweets;
    this.ea = ea;
  }

  tweet(text) {
    let tweet = {
      tweet: text
    };
    this.tweets.push(tweet);
    this.posts = parseInt(this.tweets.length, 10);
    console.log(tweet);
    console.log('Posts so far ' + this.posts);
    this.ea.publish(new PostsUpdate(this.posts));
  }
}
