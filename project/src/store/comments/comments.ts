import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, FetchStatus} from '../../constants';
import {fetchComments, postComment} from '../api-actions';
import {Review} from '../../types/reviews-type';

type ReviewData = {
  reviews: Review[];
  reviewsLoadingStatus: FetchStatus;
  postReviewStatus: FetchStatus;
};

const initialState: ReviewData = {
  reviews: [],
  reviewsLoadingStatus: FetchStatus.IDLE,
  postReviewStatus: FetchStatus.IDLE
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.reviewsLoadingStatus = FetchStatus.LOADING;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsLoadingStatus = FetchStatus.SUCCESS;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.reviewsLoadingStatus = FetchStatus.FAILED;
      })
      .addCase(postComment.pending, (state) => {
        state.postReviewStatus = FetchStatus.LOADING;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.postReviewStatus = FetchStatus.SUCCESS;
      })
      .addCase(postComment.rejected, (state) => {
        state.postReviewStatus = FetchStatus.FAILED;
      });
  }
});
