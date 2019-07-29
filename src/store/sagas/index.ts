import { all, put, call, takeEvery } from 'redux-saga/effects'
import { getUserData } from './../api/user'
import { getRepos } from './../api/repos'
import { ACTION_USER, userSearchError, userSearchFinish } from '../actions/user'
import { reposSearchRequest, reposSearchFinish, reposSearchError } from '../actions/repos'

export function* rootSaga() {
  yield all([watchUserSearch()])
}

export function* watchUserSearch() {
  yield takeEvery(ACTION_USER.REQUESTED, userSearch)
}

export function* userSearch(action: Action<ACTION_USER.REQUESTED, string>) {
  const userResponse = yield call(getUserData, action.payload)

  if (!userResponse) {
    yield put(userSearchError('User not found'))
    return
  }

  yield put(
    userSearchFinish({
      ...userResponse,
    })
  )

  yield put(reposSearchRequest(action.payload))
  const reposResponse = yield call(getRepos, action.payload)

  if (!reposResponse) {
    yield put(reposSearchError('Repos not found'))
    return
  }

  yield put(reposSearchFinish(reposResponse))
}
