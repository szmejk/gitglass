import { apiGet } from './utils'

export const getUserData = async (username: string) => {
  try {
    const response = await apiGet(`https://api.github.com/users/${username}`)

    if (response.status !== 200) {
      return null
    }

    const { login, avatar_url, bio } = response.data

    return { name: login, avatarUrl: avatar_url, bio }
  } catch (e) {
    return null
  }
}
