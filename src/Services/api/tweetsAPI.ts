import axios from 'axios'
import { TweetsState } from '../../redux-store/ducks/tweets/contracts/state'
import { Tweet } from '../../redux-store/ducks/tweets/contracts/state'

export const TweetsAPI = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({ data }) => data)
  },
}

export const TweetAPI = {
  fetchTweetData(id: string): Promise<Tweet[]> {
    return axios.get(`/tweets?_id=${id}`).then(({ data }) => data)
  },
}
