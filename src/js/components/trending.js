import TrendingAPI from '../utils/trending-api';
import { drawCards, scrollToTop } from './gallery-adapter';

export default class Trending {
  constructor() {
    this.trendingAPI = new TrendingAPI();
  }

  bindPaginatorToTrending(total_results) {
    window.paginator.onPageClick = this.onPageClicked.bind(this);
    window.paginator.totalResults = total_results;

    if (!window.paginator.isShown) {
      window.paginator.show();
    }
  }

  async onHomePageLoaded() {
    try {
      const { total_results, results } = await this.trendingAPI.getMovies();
      drawCards(results);
      this.bindPaginatorToTrending(total_results);
    } catch (error) {
      console.error(error);
    }
  }

  async onPageClicked(event) {
    try {
      const { results } = await this.trendingAPI.getMovies(event);
      drawCards(results);
      scrollToTop();
    } catch (error) {
      console.error(error);
    }
  }

  async onHomeButtonClicked(event) {
    event.preventDefault();
    if (event.target.classList.contains('link__current')) {
      return;
    }

    this.onHomePageLoaded();
  }
}
