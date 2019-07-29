interface Repo {
    name: string
    starCount: number
    url: string
}

interface ReposState {
    fetching: boolean
    reposError: string | null
    repos: Repo[]
}

