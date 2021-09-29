import { LoadingState, TagState } from './contracts/state'
import produce, { Draft } from 'immer'
import { TagActions, TagsActionsType } from './actionCreators'

const initialTagsState: TagState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const tagsReducer = produce((draft: Draft<TagState>, action: TagActions) => {
  switch (action.type) {
    case TagsActionsType.SET_TAGS:
      draft.items = action?.payload
      draft.loadingState = LoadingState.LOADED
      break

    case TagsActionsType.FETCH_TAGS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break

    case TagsActionsType.SET_LOADING_STATE:
      draft.loadingState = action?.payload
      break

    default:
      break
  }
}, initialTagsState)
