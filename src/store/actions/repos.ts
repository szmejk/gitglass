export enum ACTION_REPOS {
  REQUESTED = '@repos/requested',
  FINISHED = '@repos/finished',
  FAILED = '@repos/failed',
}

export const reposSearchRequest: (name: string) => Action<ACTION_REPOS.REQUESTED, string> = name => ({
  type: ACTION_REPOS.REQUESTED,
  payload: name,
})

export const reposSearchError: (error: string) => Action<ACTION_REPOS.FAILED, string> = error => ({
  type: ACTION_REPOS.FAILED,
  payload: error,
})

export const reposSearchFinish: (repos: Repo[]) => Action<ACTION_REPOS.FINISHED, Repo[]> = repos => ({
  type: ACTION_REPOS.FINISHED,
  payload: repos,
})

export type ReposActions =
  | ReturnType<typeof reposSearchRequest>
  | ReturnType<typeof reposSearchFinish>
  | ReturnType<typeof reposSearchError>
