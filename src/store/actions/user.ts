export enum ACTION_USER {
  REQUESTED = '@user/requested',
  FINISHED = '@user/finished',
  FAILED = '@user/failed',
}

export const userSearchRequest: (name: string) => Action<ACTION_USER.REQUESTED, string> = name => ({
  type: ACTION_USER.REQUESTED,
  payload: name,
})

export const userSearchFinish: (user: User) => Action<ACTION_USER.FINISHED, User> = user => ({
  type: ACTION_USER.FINISHED,
  payload: user,
})

export const userSearchError: (error: string) => Action<ACTION_USER.FAILED, string> = error => ({
  type: ACTION_USER.FAILED,
  payload: error,
})

export type UserActions =
  | ReturnType<typeof userSearchRequest>
  | ReturnType<typeof userSearchFinish>
  | ReturnType<typeof userSearchError>
