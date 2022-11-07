const getWordCapitalized = (word : string): string => word[0].toUpperCase() + word.slice(1);

const getRatingInPercent = (rating : number, maxRating : number): number => rating * 100 / maxRating;

export {
  getWordCapitalized,
  getRatingInPercent
};
