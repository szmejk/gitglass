import * as React from 'react'
import { ReposContainer } from '../../containers/ReposContainer'

interface Props {
  user: User
  repos: ReposState
}

export const Card: React.FC<Props> = ({ user: { name, avatarUrl, bio }, repos }) => (
  <div>
    <h2>{name}</h2>
    {bio && <span>{bio}</span>}
    <img src={avatarUrl} alt="Users avatar" />
    <ReposContainer repos={repos} />
  </div>
)
