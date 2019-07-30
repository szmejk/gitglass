import { userSearch } from '../../src/store/sagas'
import { put, call } from 'redux-saga/effects'
import { userSearchRequest, userSearchError, userSearchFinish } from '../../src/store/actions/user'
import { reposSearchRequest } from '../../src/store/actions/repos'
import { getUserData } from '../../src/store/api/user'

describe('userSearch Saga', () => {
  const username = 'mockedName'
  const mockUser = {
    name: username,
    avatarUrl: 'mockedUrl',
    bio: 'mockedBio',
  }
  let generator: ReturnType<typeof userSearch>
  beforeEach(() => {
    generator = userSearch(userSearchRequest(username))
  })

  it('attempts to fetch user data', () => {
    expect(generator.next().value).toEqual(call(getUserData, username))
  })

  it('puts userSearchError and ends execution on fetch error', () => {
    generator.next()

    expect(generator.next(null).value).toEqual(put(userSearchError('User not found')))
    expect(generator.next().done).toBeTruthy()
  })

  it('puts userSearchFinish and reposSearchRequest when fetch is successful', () => {
    generator.next()

    expect(generator.next(mockUser).value).toEqual(put(userSearchFinish(mockUser)))
    expect(generator.next().value).toEqual(put(reposSearchRequest(username)))
    expect(generator.next().done).toBeTruthy()
  })
})
