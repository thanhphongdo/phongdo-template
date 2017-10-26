import { Injectable } from '@angular/core';
import { ParseUser } from "./parse-definition";
import { Config } from '../../config/env.config';
declare var Parse: any;

@Injectable()
export class ParseSDK {

  constructor() {
    Parse.serverURL = Config.PARSE_SERVER_URL;
    Parse.applicationId = Config.APP_ID;
  }

  init() {
    console.log('ParseSDK Init');
    console.log(Parse);
  }

  login(username: string, password: string) {
    return new Promise((resolve: Function, reject: Function) => {
      Parse.User.logIn(username, password).then((user: any) => {
        resolve(new ParseUser(user));
      }).catch((err: any) => {
        reject(err);
      })
    })
  }

  logout() {
    return new Promise((resolve: Function, reject: Function) => {
      Parse.User.logOut().then(() => {
        resolve()
      }).catch((err: any) => {
        reject(err);
      })
    })
  }

  cloud(functionName: string, param: any) {
    return new Promise((resolve: Function, reject: Function) => {
      Parse.Cloud.run(functionName, param).then((response: any) => {
        resolve(response);
      }).catch((err: any) => {
        reject(err);
      })
    })
  }

  currentUser() {
    return new ParseUser(Parse.User.current());
  }

}

