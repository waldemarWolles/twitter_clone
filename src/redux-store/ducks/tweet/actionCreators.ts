import { Tweet } from './../tweets/contracts/state'
import { LoadingState } from './contracts/state'
import {
  FetchTweetActionInterface,
  SetTweetActionInterface,
  SetTweetLoadingStateInterface,
  TweetActionsType,
} from './contracts/actionTypes'

export const setTweet = (payload: Tweet): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
})

export type TweetActions =
  | SetTweetActionInterface
  | FetchTweetActionInterface
  | SetTweetLoadingStateInterface
