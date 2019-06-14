import { Injectable } from '@angular/core';
import {
         CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         // CanActivateChild,
   } from '@angular/router';

import { NbAuthService } from '@nebular/auth';
// import { of as observableOf } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

   constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // return observableOf(false);
    // console.log("canactive");
       return this.authService.isAuthenticated().pipe(
       // return observableOf(false).pipe(
          tap(authenticated => {
            // console.log("canactive: "+authenticated);
            if (!authenticated) {
              this.router.navigate(['auth/login']);
            }
          }),
        );
      // return this.authService.isAuthenticated();
      // canActive can return Observable<boolean>, which is exactly what isAuhenticated returns
    }
}
