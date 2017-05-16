import {QuoteInterface} from '../interfaces/quote';

export class QuotesService {
  private favoriteQuotes : QuoteInterface[] = [];

  addQuoteToFavorites(quote: QuoteInterface) {
    const position = this.favoriteQuotes.findIndex((quoteElement : QuoteInterface) => {
      return quoteElement.id == quote.id;
    });
    if (position < 0)
      this.favoriteQuotes.push(quote);
  }

  removeQuoteFroMFavorites(quote: QuoteInterface) {
    const position = this.favoriteQuotes.findIndex((quoteElement : QuoteInterface) => {
      return quoteElement.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() : QuoteInterface[] {
    return this.favoriteQuotes.slice();
  }
}
