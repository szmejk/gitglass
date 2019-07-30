import { reposReducer } from '../../src/store/reducer/partialReducers/repos'
import { reposSearchRequest, reposSearchFinish, reposSearchError } from '../../src/store/actions/repos'

describe('reposReducer', () => {
  const username = 'username'
  const error = 'error'
  const mockRepos = [
    {
      name: 'mocked',
      starCount: 200,
      url: 'mocked',
    },
  ]

  it('should set fetching to true on ACTION_REPOS.REQUESTED', () => {
    const action = reposSearchRequest(username)

    expect(reposReducer(undefined, action)).toMatchObject({
      fetching: true,
      reposError: null,
      repos: [],
    })
  })

  it('should add new repos on ACTION_REPOS.FINISHED ', () => {
    const action = reposSearchFinish(mockRepos)

    expect(reposReducer(undefined, action)).toMatchObject({
      fetching: false,
      reposError: null,
      repos: mockRepos,
    })
  })
  it('should set error message and clean repos on ACTION_REPOS.FAILED', () => {
    const action = reposSearchError(error)

    expect(reposReducer(undefined, action)).toMatchObject({
      fetching: false,
      reposError: error,
      repos: [],
    })
  })
})
