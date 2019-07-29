interface User {
    name: string
    avatarUrl: string
    bio: string | null
}

interface UserState {
    user: User | null     
    fetching: boolean
    userError: string | null
}