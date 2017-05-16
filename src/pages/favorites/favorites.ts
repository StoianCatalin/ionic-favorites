import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {QuoteInterface} from "../../interfaces/quote";
import {QuotesService} from "../../services/quotes.service";
import { Quote } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

  quotes: QuoteInterface[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote : QuoteInterface) {
    const modal = this.modalCtrl.create(Quote, quote);
    modal.present();
    modal.onDidDismiss((remove) => {
      if (remove)
        this.quotesService.removeQuoteFroMFavorites(quote);
        this.quotes = this.quotesService.getFavoriteQuotes();
    })
  }

}
