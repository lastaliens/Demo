
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbTokenStorage } from '@nebular/auth';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';

import { HttpApiUtil } from '../model/http-api-util';
import { EnvService } from '../utils';

@Injectable()
export class IpccApiUtil  extends HttpApiUtil {
 private baseEndpoint = '';

 constructor(private http: HttpClient, private localTokenStorage: NbTokenStorage, private envService: EnvService ) {
  super(http);
  this.baseEndpoint = this.envService.apiUrl;
 }

 private getHeader() {
  // let token = this.localTokenStorage.get();
  // console.log("get header token: "+token);
  return {
    headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'Bearer ' + this.localTokenStorage.get(),
    }),
  };
 }

 get(endPoint: string,
   params: [string, string][] = [],
   sorts: [string, string][] = [ ['sort_created_time' , 'desc'] ],
   limit: string = '10',
   offset: string = '0') {
  const filterQuery = params.reduce(function (acc, param) {
   return acc + '&' + param[0] + '=' + param[1];
  }, '?1=1');
  const sortQuery = sorts.reduce(function (acc, param) {
    return acc + '&' + param[0] + '=' + param[1];
  }, filterQuery);
  const query = sortQuery + '&limit=' + limit + '&offset=' + offset;
  return this.http.get<any>(this.baseEndpoint + endPoint + query, this.getHeader());
 }

 get_one(
   endPoint: string,
   id: any,
   params: [string, string][],
  ) {
  const filterQuery = params.reduce(function (acc, param) {
   return acc + '&' + param[0] + '=' + param[1];
  }, '?1=1');
  return this.http.get<any>(this.baseEndpoint + endPoint + '/' + id + filterQuery, this.getHeader());
 }

 put(endPoint: string, data: any) {
  return this.http.put<any>(this.baseEndpoint + endPoint, data, this.getHeader());
 }

 post(endPoint: string, id: string, newdata: any) {
  return this.http.post<any>(this.baseEndpoint + endPoint + '/' + id, newdata, this.getHeader());
 }

delete(endPoint: string, id: string) {
  return this.http.delete<any>(this.baseEndpoint + endPoint + '/' + id,  this.getHeader());
 }

}
