

import {Observable } from 'rxjs';


export abstract class HttpApiUtil {
  constructor(http) {}
  // abstract get(endpoint: string, params: Array<any>[]): Observable<any>;
  // abstract get(endpoint: string, params: Array<any>[], sorts: Array<any>[]): Observable<any>;

  abstract get(
   endpoint: string,
   params?: [string, string][],
   sorts?: [string, string][],
   limit?: string,
   offset?: string): Observable<any>;

  abstract get_one(
    endPoint: string,
    id: string,
    params?: [string, string][]): Observable<any>;

  abstract put(endpoint: string, data: any): Observable<any>;

  abstract post(endpoint: string, id: string, data: any): Observable<any>;

  abstract delete(endpoint: string, id: string): Observable<any>;
}
