import {Observable } from 'rxjs';

export interface UserModel {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
}

export abstract class UserService {
  constructor(http) {}
  abstract getUsers(): Observable<any>;
  abstract deleteUser(id: string): Observable<{}>;
}
