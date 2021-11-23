import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { User } from '../employee-register/list-users/list-users.component';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) {}
  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
  viewuser(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  addUser(userObj: any) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }
  deleteUSer(id: any) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
  updateUser(id: any, userObj: any) {
    return this.http.put(this.baseUrl + 'users/' + id, userObj);
  }
}
