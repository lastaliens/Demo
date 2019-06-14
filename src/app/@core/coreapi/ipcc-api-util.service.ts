
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbTokenStorage } from '@nebular/auth';
import { HttpApiUtil } from '../data/http-api-util';

@Injectable()
export class IpccApiUtil  extends HttpApiUtil {
 private baseEndpoint = 'http://35.160.184.112:8090/api/v1/';

 constructor(private http: HttpClient, private localTokenStorage: NbTokenStorage ) {
  super(http);
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
}
