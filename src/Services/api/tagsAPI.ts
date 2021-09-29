import axios from 'axios'
import { TagState } from './../../redux-store/ducks/tags/contracts/state'

export const TagsAPI = {
  fetchTags(): Promise<TagState['items']> {
    return axios.get('/tags').then(({ data }) => data)
  },
}
