import {inject} from 'aurelia-framework';
import TweetService from './services/tweet-service';

@inject(TweetService)
export class App {

  firstName = 'Homer';
  lastName = 'Simpson';
  email = 'homer@simpson.com';
  password = 'secret';

  loggedIn = false;
  showSignup = false;

  constructor(ds) {
    this.donationService = ds;
  }

  signup() {
    this.showSignup = true;
  }

  register(e) {
    this.showSignup = false;
    this.donationService.register(this.firstName, this.lastName, this.email, this.password);
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
