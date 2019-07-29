import { combineReducers } from 'redux'
import { userReducer } from './partialReducers/user'
import { reposReducer } from './partialReducers/repos'

export const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
})
