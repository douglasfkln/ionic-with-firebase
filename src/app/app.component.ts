import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { ListaCarrosPage } from '../pages/lista-carros/lista-carros';

const config = {
  apiKey: "AIzaSyBvH1HZQRx7sIfWJ0uoGgQGB82F5R8QqeM",
  authDomain: "ionic-with-firebase2.firebaseapp.com",
  databaseURL: "https://ionic-with-firebase2.firebaseio.com",
  projectId: "ionic-with-firebase2",
  storageBucket: "ionic-with-firebase2.appspot.com",
  messagingSenderId: "814345672414"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ListaCarrosPage;

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

