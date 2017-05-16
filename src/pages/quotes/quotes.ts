import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {QuoteInterface} from "../../interfaces/quote";
import {Quote} from "../quote/quote";
import {QuotesService} from "../../services/quotes.service";

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
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }

  ionViewDidLoad() {
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorite(quote: QuoteInterface) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    alert.present();
  }

}
