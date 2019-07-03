import {Observable } from 'rxjs';

export interface UserModel {
  emp_code: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  roles: string[];
  dob: string;
  phone_number: string;
}

export abstract class UserService {
  constructor(http) {}
  abstract add(data: any): Observable<any>;
  abstract get(): Observable<any>;
  abstract get_one(id: string): Observable<any>;
  abstract update(id: string, data: any): Observable<any>;
  abstract delete(id: string): Observable<any>;
}
