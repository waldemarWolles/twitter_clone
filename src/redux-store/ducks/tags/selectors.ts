import { createSelector } from 'reselect'
import { RootState } from './../../store'
import { LoadingState, TagState } from './contracts/state'

export const selectTags = (state: RootState): TagState => state.tags

export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState

export const selectIsTagsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items)
