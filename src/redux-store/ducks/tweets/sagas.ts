import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes'
import { takeEvery, call, put } from 'redux-saga/effects'
import { TweetsAPI } from '../../../Services/api/tweetsAPI'
import { setTweetsLoadingState, setTweets, fetchAddTweet, addTweet } from './actionCreators'
import { LoadingState, Tweet } from './contracts/state'

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsAPI.fetchTweets)
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test User',
        username: 'test',
        avatarURL: 'https://source.unsplash.com/random/100x100?5',
      },
      date: 'somedate',
    }
    const item = yield call(TweetsAPI.addTweet, data)
    yield put(addTweet(item))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
