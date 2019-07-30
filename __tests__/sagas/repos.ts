import { reposSearch } from '../../src/store/sagas'
import { put, call } from 'redux-saga/effects'
import { reposSearchRequest, reposSearchError, reposSearchFinish } from '../../src/store/actions/repos'
import { getRepos } from '../../src/store/api/repos'

describe('reposSearch Saga', () => {
  const username = 'mockedName'
  const mockRepos = [
    {
      name: 'mocked',
      starCount: 200,
      url: 'mocked',
    },
  ]
  let generator: ReturnType<typeof reposSearch>
  beforeEach(() => {
    generator = reposSearch(reposSearchRequest(username))
  })

  it('attempts to fetch users repos', () => {
    expect(generator.next().value).toEqual(call(getRepos, username))
  })

  it('puts reposSearchError and ends execution on fetch error', () => {
    generator.next()

    expect(generator.next(null).value).toEqual(put(reposSearchError('Repos not found')))
    expect(generator.next().done).toBeTruthy()
  })

  it('puts reposSearchFinish and ends execution when fetch is successful', () => {
    generator.next()

    expect(generator.next(mockRepos).value).toEqual(put(reposSearchFinish(mockRepos)))
    expect(generator.next().done).toBeTruthy()
  })
})
