import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class Quote {
  author: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.author = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  closeModal(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
