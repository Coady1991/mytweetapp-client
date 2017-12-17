import {inject} from 'aurelia-framework';
import TweetService from './services/tweet-service';

@inject(TweetService)
export class App {

  email = 'homer@simpson.com';
  password = 'secret';

  loggedIn = false;

  constructor(ds) {
    this.donationService = ds;
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    const status = this.donationService.login(this.email, this.password);
    this.prompt = status.message;
    this.loggedIn = status.success;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }
}
