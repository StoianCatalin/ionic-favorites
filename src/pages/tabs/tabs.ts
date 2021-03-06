
import {Component} from "@angular/core";
import {Favorites} from "../favorites/favorites";
import {Library} from "../library/library";
import {Quotes} from "../quotes/quotes";
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favorites" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="library" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="quotes" tabTitle="Quotes" tabIcon="book"></ion-tab>
    </ion-tabs>    
  `
})
export class TabsPage {
  favorites = Favorites;
  library = Library;
  quotes = Quotes;
}
