interface User {
    name: string
    avatarUrl: string
    bio: string
}

interface UserState {
    user: User | null     
    fetching: boolean
    userError: string | null
}