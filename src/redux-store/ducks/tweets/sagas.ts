import { takeEvery, call, put } from 'redux-saga/effects'
import { TweetsAPI } from '../../../Services/api/tweetsAPI'
import { TweetsActionsType, setTweetsLoadingState, setTweets } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsAPI.fetchTweets)
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
