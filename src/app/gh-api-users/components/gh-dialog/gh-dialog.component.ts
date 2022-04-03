import { Component, OnInit } from '@angular/core';
import { ghRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';

import { GhApiGitService } from '../../services/gh-api-git.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repositoriesLists: ghRepos[] | undefined;

  constructor(
    private ghService: GhApiGitService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
      }
    )

    this.ghService.findReposUser(this.username).subscribe(
      (gUser) => {
        this.repositoriesLists = gUser
      }
    )
  }

}
