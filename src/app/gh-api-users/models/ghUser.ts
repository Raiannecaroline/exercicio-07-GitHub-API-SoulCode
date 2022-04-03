export interface GhUser{
  name: string,
  login: string,
  id: string,
  avatar_url: string,
  html_url: string,
  repos_url: string,
  location: string,
  bio: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: Date
}