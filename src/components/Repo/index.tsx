import * as React from 'react'
import { Container, StarCount, RepoAnchor } from './styles'
interface Props {
  repo: Repo
}

export const Repo: React.FC<Props> = ({ repo: { url, starCount, name } }) => (
  <Container>
    <StarCount>⭐ {starCount}</StarCount>
    <RepoAnchor href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </RepoAnchor>
  </Container>
)
