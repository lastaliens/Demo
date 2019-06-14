import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';
import { UserService } from '../model/users';
import { HttpApiUtil } from '../data/http-api-util';

@Injectable()
export class UsersService extends UserService {

  constructor ( private ipccApi: HttpApiUtil) {
  super(ipccApi);

}
deleteUser(id: string): Observable<{}> {
   // const url = 'http://35.160.184.112:8090/api/v1/users/123';
   // console.log(url);
   // return this.http.delete(url, this.httpOptions)
   // .pipe(
   //    catchError(this.handleError),
   //  );
  return observableOf([true]);

}

// deleteHero (id: number): Observable<{}> {
//   //const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
//   return this.http.delete(url, this.httpOptions)
//     .pipe(
//       catchError(this.handleError('deleteHero'))
//     );
// }

  getUsers(): Observable<any> {
      return this.ipccApi.get('users');


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
