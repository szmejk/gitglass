import * as React from 'react'
import ReactLoading from 'react-loading'
import { Card } from '../../components/Card'

interface Props {
  user: UserState
  repos: ReposState
}

export const CardContainer: React.FC<Props> = ({ user: { user, userError, fetching }, repos }) =>
  user &&
  (fetching ? (
    <ReactLoading type="spinningBubbles" color="#ffffff" />
  ) : userError ? (
    <span>{userError}</span>
  ) : (
    <Card user={user} repos={repos} />
  ))
