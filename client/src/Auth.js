import auth0 from "auth0-js";

// const returnURI = 'http://localhost:3000/' 
// const callbackURI = 'http://localhost:3000/callback'

const returnURI = 'https://cardiac-arrest-3.herokuapp.com/' 
const callbackURI = 'https://cardiac-arrest-3.herokuapp.com/callback'

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: callbackURI,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: "token",
      scope: "openid email",
    });

    this.authFlag = "isLoggedIn";
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  getIdToken() {
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }

        this.setSession(authResult);
        resolve();
      });
    });
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorage.setItem(this.authFlag, JSON.stringify(true));
  }

  logout() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    this.auth0.logout({
      returnTo: returnURI,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    });
  }

  silentAuth() {
    if (this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the token's expiry time
    //return new Date().getTime() < this.expiresAt;
    return JSON.parse(localStorage.getItem(this.authFlag));
  }
}

//export const UserPicture = new Auth();
//onsole.log(UserPicture);

// (exports.onExecutePostLogin = async (event, api) => {
//   return event.user.picture;
// });

const auth = new Auth();

export default auth;
