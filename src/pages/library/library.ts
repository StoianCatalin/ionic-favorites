import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuoteInterface} from "../../interfaces/quote";
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{

  quoteCollection: {category: string, quotes: QuoteInterface[], icon: string}[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
