import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../InfoFetcher/fetcher.service';
import { User } from '../Models/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  Users!: User[];

  constructor(private fs: FetcherService) { }

  ngOnInit(): void {
    let subscribtion = this.fs.GetUserList().subscribe(
      data => {
        this.Users = data.data;
        subscribtion.unsubscribe();
      }
    );
  }

  deleteUser(id: number) {
    this.Users = this.Users.filter(user => user.id !== id);
  }
}
