import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { UserService } from '../model/users';
import { HttpApiUtil } from '../model/http-api-util';

@Injectable()
export class UsersService extends UserService {

 endpoint = 'users';

 constructor ( private ipccApi: HttpApiUtil) {
  super(ipccApi);
 }

  add(data: any): Observable<any> {
    return this.ipccApi.put(this.endpoint, data);
  }

  get(): Observable<any> {
      return this.ipccApi.get(this.endpoint);
  }

  get_one(id: string): Observable<any> {
      return this.ipccApi.get_one(this.endpoint, id);
  }

update(id: string, data: any): Observable<any> {
    return this.ipccApi.post(this.endpoint, id, data);
  }

delete(id: string): Observable<any> {
    return this.ipccApi.delete(this.endpoint, id);

}


//   private handleError(error: HttpErrorResponse) {
//    // console.log("error happend");
//   if (error.error instanceof ErrorEvent) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error.message);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong,
//     console.error(
//       `Backend returned code ${error.status}, ` +
//       `body was: ${error.error}`);
//   }
//   // return an observable with a user-facing error message
//   return throwError( 'Something bad happened; please try again later.');
// }



}
