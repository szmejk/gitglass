import { Reducer } from 'redux'
import { ReposActions, ACTION_REPOS } from '../../actions/repos'

const initialReposState: ReposState = {
  fetching: false,
  reposError: null,
  repos: [],
}

export const reposReducer: Reducer<ReposState, ReposActions> = (state = initialReposState, action) => {
  switch (action.type) {
    case ACTION_REPOS.REQUESTED: {
      return { ...state, fetching: true }
    }
    case ACTION_REPOS.FINISHED: {
      return {
        fetching: false,
        reposError: null,
        repos: action.payload,
      }
    }
    case ACTION_REPOS.FAILED: {
      return {
        fetching: false,
        reposError: action.payload,
        repos: [],
      }
    }
    default: {
      return state
    }
  }
}
