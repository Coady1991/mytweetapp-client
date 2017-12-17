import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';
import {PostsUpdate} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Fixtures, EventAggregator)
export default class TweetService {

  tweets = [];
  users = [];
  posts = 0;

  constructor(data, ea) {
    this.tweets = data.tweets;
    this.users = data.users;
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

  login(email, password) {
    const status = {
      success: false,
      message: ''
    };

    if (this.users[email]) {
      if (this.users[email].password === password) {
        status.success = true;
        status.message = 'logged in';
      } else {
        status.message = 'Incorrect password';
      }
    } else {
      status.message = 'Unknown user';
    }

    return status;
  }
}
