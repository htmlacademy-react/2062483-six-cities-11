import { Review } from '../types/reviews-type';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 3,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-10-03T13:58:46.511Z'
  },
  {
    id: 1,
    user: {
      id: 19,
      isPro: false,
      name: 'Christin',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/10.jpg'
    },
    rating: 3,
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2022-10-08T13:58:46.511Z'
  },
  {
    id: 1,
    user: {
      id: 14,
      isPro: true,
      name: 'Corey',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/5.jpg'
    },
    rating: 4,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-09-26T13:58:46.511Z'
  },
  {
    id: 3,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 4,
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2022-09-26T13:58:46.511Z'
  }
];
