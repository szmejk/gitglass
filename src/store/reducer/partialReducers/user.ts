import { Reducer } from 'redux'
import { UserActions, ACTION_USER } from '../../actions/user'

const initialUserState: UserState = {
  fetching: false,
  userError: null,
  user: null,
}

export const userReducer: Reducer<UserState, UserActions> = (state = initialUserState, action) => {
  switch (action.type) {
    case ACTION_USER.REQUESTED: {
      return {
        ...state,
        fetching: true,
      }
    }
    case ACTION_USER.FINISHED: {
      return {
        ...state,
        fetching: false,
        userError: null,
        user: action.payload,
      }
    }
    case ACTION_USER.FAILED: {
      return {
        ...state,
        fetching: false,
        userError: action.payload,
        user: null,
      }
    }
    default: {
      return state
    }
  }
}
