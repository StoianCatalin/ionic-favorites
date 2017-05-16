import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FavoritesModule} from "../pages/favorites/favorites.module";
import {LibraryModule} from "../pages/library/library.module";
import {QuoteModule} from "../pages/quote/quote.module";
import {QuotesModule} from "../pages/quotes/quotes.module";
import {SettingsModule} from "../pages/settings/settings.module";
import {Favorites} from "../pages/favorites/favorites";
import {Quote} from "../pages/quote/quote";
import {Library} from "../pages/library/library";
import {Quotes} from "../pages/quotes/quotes";
import {Settings} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quotes.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FavoritesModule,
    LibraryModule,
    QuoteModule,
    QuotesModule,
    SettingsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
