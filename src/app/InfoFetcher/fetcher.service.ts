import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users, UserResponse, Resources } from '../Models/models'

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private client: HttpClient) { }

  GetUserList() {
      return this.client.get<Users>('https://reqres.in/api/users');
  }

  GetUser(id: string) {
      return this.client.get<UserResponse>(`https://reqres.in/api/users/${id}`);
  }

  GetResources() {
      return this.client.get<Resources>('https://reqres.in/api/unknown');
  }
}
