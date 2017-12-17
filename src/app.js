export class App {

  email = 'homer@simpson.com';
  password = 'secret';

  loggedIn = false;

  login() {
    console.log(`Logging in ${this.email}`);
    this.loggedIn = true;
  }
}
