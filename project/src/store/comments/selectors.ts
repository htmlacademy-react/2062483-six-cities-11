import {FetchStatus, NameSpace} from '../../constants';
import {State} from '../../types/state';
import {Review} from '../../types/reviews-type';
import {createSelector} from '@reduxjs/toolkit';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Reviews].reviewsLoadingStatus;
// export const getReviewsStatus = createSelector([getStatus], (status) => ({
//   isLoading: [FetchStatus.IDLE, FetchStatus.LOADING].includes(status),
//   isSuccess: status === FetchStatus.SUCCESS,
//   isFailed: status === FetchStatus.FAILED
// }));

export const getPostStatus = (state: State): FetchStatus => state[NameSpace.Reviews].postReviewStatus;
export const getPostReviewStatus = createSelector([getPostStatus], (status) => ({
  isLoading: status === FetchStatus.LOADING,
  isSuccess: status === FetchStatus.SUCCESS,
  isFailed: status === FetchStatus.FAILED
}));
