import auth0 from "auth0-js";

class Auth {
  auth0 = new auth0.WebAuth({
    domain: "justingdev.auth0.com",
    clientID: "-w3hhwhiiPTBm8jr2587YrySKZ3NIAAG",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://justingdev.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
export default Auth;
