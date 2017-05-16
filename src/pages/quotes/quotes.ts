import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {QuoteInterface} from "../../interfaces/quote";
import {Quote} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes {

  quotesGroup: {category: string, quotes: QuoteInterface[], icon: string};

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('ok');
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('no');
          }
        }
      ]
    });

    alert.present();
  }

}
