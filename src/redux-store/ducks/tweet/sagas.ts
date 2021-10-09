import { takeEvery, call, put } from 'redux-saga/effects'
import { TweetsAPI } from '../../../Services/api/tweetsAPI'
import { Tweet } from '../tweets/contracts/state'
import { setTweetLoadingState, setTweet } from './actionCreators'
import { FetchTweetActionInterface, TweetActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface): any {
  try {
    const data: Tweet[] = yield call(TweetsAPI.fetchTweetData, tweetId)
    yield put(setTweet(data[0]))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}
