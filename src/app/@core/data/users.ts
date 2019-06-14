import {Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

export abstract class UserService {
  constructor(http) {}
  abstract getUsers(): Observable<any>;
  abstract deleteUser(id: string): Observable<{}>;
}
