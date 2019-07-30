import { apiGet } from './utils'

export const getRepos = async (username: string) => {
  try {
    const response = await apiGet(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`)
    if (response.status !== 200) {
      return null
    }

    let repos = response.data.items

    if (repos.length > 3) {
      repos = repos.slice(0, 3)
    }

    const reposAbriged = repos.map((repo: any) => ({
      name: repo.name,
      starCount: repo.stargazers_count,
      url: repo.html_url,
    }))

    return reposAbriged
  } catch (e) {
    return null
  }
}
