import { userReducer } from '../../src/store/reducer/partialReducers/user'
import { userSearchRequest, userSearchFinish, userSearchError } from '../../src/store/actions/user'

describe('userReducer', () => {
  const username = 'username'
  const error = 'error'
  const mockUser = {
    name: username,
    avatarUrl: 'mockedUrl',
    bio: 'mockedBio',
  }

  it('should set fetching to true on ACTION_USER.REQUESTED', () => {
    const action = userSearchRequest(username)

    expect(userReducer(undefined, action)).toMatchObject({
      fetching: true,
      userError: null,
      user: null,
    })
  })

  it('should add new user on ACTION_USER.FINISHED ', () => {
    const action = userSearchFinish(mockUser)

    expect(userReducer(undefined, action)).toMatchObject({
      fetching: false,
      userError: null,
      user: mockUser,
    })
  })
  it('should set error message and clean user on ACTION_USER.FAILED', () => {
    const action = userSearchError(error)

    expect(userReducer(undefined, action)).toMatchObject({
      fetching: false,
      userError: error,
      user: null,
    })
  })
})
