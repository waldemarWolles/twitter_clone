import { takeEvery, call, put } from 'redux-saga/effects'
import { TagsAPI } from '../../../Services/api/tagsAPI'
import { TagsActionsType, setTagsLoadingState, setTags } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTagsRequest(): any {
  try {
    const items = yield call(TagsAPI.fetchTags)
    yield put(setTags(items))
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR))
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
