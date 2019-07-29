import * as React from 'react'
import ReactLoading from 'react-loading'

interface Props {
  repos: ReposState
}

export const ReposContainer: React.FC<Props> = ({ repos: { fetching, repos, reposError } }) =>
  fetching ? (
    <ReactLoading type="bars" color="#000000" />
  ) : reposError ? (
    <span>{reposError}</span>
  ) : (
    <>
      {repos.map(({ name, url, starCount }) => (
        <div>
          <span>{starCount}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
      ))}
    </>
  )
