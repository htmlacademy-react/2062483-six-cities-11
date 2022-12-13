import dayjs from 'dayjs';
import {Offer} from './types/offers-type';
import {Review} from './types/reviews-type';
import {SortType} from './constants';

export const getWordCapitalized = (word: string): string => word[0].toUpperCase() + word.slice(1);

export const getRatingInPercent = (rating: number, maxRating: number): number => rating * 100 / maxRating;

export const getFormatDateInComments = (date: string): string => dayjs(date).format('MMMM YYYY');

export const getFormatDateInTag = (date: string): string => dayjs(date).format('YYYY-MMMM-DDDD');

export const getOffersByCity = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);

const sortlowToHigh = (a: Offer, b: Offer) => a.price - b.price;

const sortHighToLow = (a: Offer, b: Offer) => b.price - a.price;

const sortRating = (a: Offer, b: Offer) => a.rating - b.rating;

export const getSortOffers = (sortType: string, offers: Offer[]) => {
  switch (sortType) {
    case SortType.Popular:
      return [...offers];
    case SortType.LowToHigh:
      return [...offers].sort(sortlowToHigh);
    case SortType.HighToLow:
      return [...offers].sort(sortHighToLow);
    case SortType.Rating:
      return [...offers].sort(sortRating);
    default :
      throw new Error(`Unknown sort type: '${sortType}'!`);
  }
};

export const getRandomStringFromArray = (arr: string[]): string => arr[Math.floor((Math.random() * arr.length))];

export const sortReviews = (a: Review, b: Review) => dayjs(b.date).diff(dayjs(a.date));
