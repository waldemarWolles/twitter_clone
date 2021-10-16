import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsAddFormStateInterface,
  SetTweetsLoadingStateInterface,
  TweetsActionsType,
} from './contracts/actionTypes'
import {
  AddFormState,
  LoadingState,
  Tweet,
  TweetsState,
} from './contracts/state'

export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export const setAddFormState = (
  payload: AddFormState
): SetTweetsAddFormStateInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | SetTweetsAddFormStateInterface
