interface AppState {
    user: UserState
    repos: ReposState
}

interface Action<T, P> {
    type: T
    payload: P
}