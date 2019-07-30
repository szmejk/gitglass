import * as React from 'react'
import { shallow } from 'enzyme'
import ReactLoading from 'react-loading'
import { CardContainerComponent } from '../../src/containers/CardContainer'
import { Error } from '../../src/containers/CardContainer/styles'
import { Card } from '../../src/components/Card'

describe('CardContainer', () => {
  const userError = { fetching: false, userError: 'error', user: null }
  const userFetching = {
    fetching: true,
    userError: null,
    user: {
      name: 'username',
      avatarUrl: 'mockedUrl',
      bio: 'mockedBio',
    },
  }
  const userCorrect = {
    fetching: false,
    userError: null,
    user: {
      name: 'username',
      avatarUrl: 'mockedUrl',
      bio: 'mockedBio',
    },
  }

  it('renders Error component on error', () => {
    const CardContainer = shallow(<CardContainerComponent user={userError} />)

    expect(CardContainer.find(Error)).toHaveLength(1)
  })

  it('renders Loading when fetching user data', () => {
    const CardContainer = shallow(<CardContainerComponent user={userFetching} />)

    expect(CardContainer.find(ReactLoading)).toHaveLength(1)
  })

  it('renders Card when User is provided', () => {
    const CardContainer = shallow(<CardContainerComponent user={userCorrect} />)

    expect(CardContainer.find(Card)).toHaveLength(1)
  })
})
