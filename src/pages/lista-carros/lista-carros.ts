import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ListaCarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-carros',
  templateUrl: 'lista-carros.html',
})
export class ListaCarrosPage {

  carros = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('carros/').on('value', resp => {
      console.log(resp);
      
      this.carros = [];
      // Percore os registros e seta no array de visualização
      this.carros = converter(resp);
      console.log(this.carros);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarrosPage');
  }

}

export const converter = resp => {
  let array = [];

  resp.forEach(carro => {
      let item = carro.val();
      item.key = carro.key;
      array.push(item);
  });

  return array;
};