

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

}
