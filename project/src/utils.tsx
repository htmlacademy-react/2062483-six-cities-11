import dayjs from 'dayjs';
import {Offer} from './types/offers-type';

export const getWordCapitalized = (word: string): string => word[0].toUpperCase() + word.slice(1);

export const getRatingInPercent = (rating: number, maxRating: number): number => rating * 100 / maxRating;

export const getFormatDateInComments = (date: string): string => dayjs(date).format('MMMM YYYY');

export const getFormatDateInTag = (date: string): string => dayjs(date).format('YYYY-MMMM-DDDD');

export const getOffersByCity = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);
