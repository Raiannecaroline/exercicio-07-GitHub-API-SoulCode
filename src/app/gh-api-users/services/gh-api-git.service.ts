import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ghRepos } from '../models/ghRepos';
import { GhUser } from '../models/ghUser';

@Injectable()
export class GhApiGitService {

  private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findReposUser(username: string): Observable<ghRepos[]>{
    return this.http.get<ghRepos[]>(`${this.baseUrl}/${username}/repos`)
  }
}
