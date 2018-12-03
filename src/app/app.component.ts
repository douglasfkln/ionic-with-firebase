import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

const config = {
  apiKey: "AIzaSyAyJQhLLwEfd2gmH3wtd5MVViiQo8FZkI8",
  authDomain: "ionic-with-firebase-96285.firebaseapp.com",
  databaseURL: "https://ionic-with-firebase-96285.firebaseio.com",
  projectId: "ionic-with-firebase-96285",
  storageBucket: "ionic-with-firebase-96285.appspot.com",
  messagingSenderId: "281913452177"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

