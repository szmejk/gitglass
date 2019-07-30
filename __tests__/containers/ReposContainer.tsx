import * as React from 'react'
import { shallow } from 'enzyme'
import ReactLoading from 'react-loading'
import { ReposContainerComponent } from '../../src/containers/ReposContainer'
import { Repo } from '../../src/components/Repo'

describe('ReposContainer', () => {
  const reposError = { fetching: false, reposError: 'error', repos: [] }
  const reposFetching = { fetching: true, reposError: null, repos: [] }
  const reposCorrect = {
    fetching: false,
    reposError: null,
    repos: [
      {
        name: 'mocked',
        starCount: 200,
        url: 'mocked',
      },
    ],
  }

  it('renders span on error', () => {
    const CardContainer = shallow(<ReposContainerComponent repos={reposError} />)

    expect(CardContainer.find('span')).toHaveLength(1)
  })

  it('renders Loading when fetching repos data', () => {
    const CardContainer = shallow(<ReposContainerComponent repos={reposFetching} />)

    expect(CardContainer.find(ReactLoading)).toHaveLength(1)
  })

  it('renders Repos when repos are provided', () => {
    const CardContainer = shallow(<ReposContainerComponent repos={reposCorrect} />)

    expect(CardContainer.find(Repo)).toHaveLength(1)
  })
})
