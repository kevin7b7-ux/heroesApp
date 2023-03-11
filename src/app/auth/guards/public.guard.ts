import { Injectable } from '@angular/core';
import { Router,Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class PublicGuard {

    constructor(
        private authService: AuthService,
        private router:Router,
    ){}

    canAccessLogin(){
        return this.authService.checkAuthentication()
        .pipe(
            tap( isAuthenticated => {
                if( isAuthenticated ){ this.router.navigate(['./'])}
            } ),
            map( isAuthenticated => !isAuthenticated )
        )
    }

    canMatch(route: Route): boolean  | Observable<boolean> {
        return this.canAccessLogin()
    }

    canActivate(): boolean |  Observable<boolean> {
        return this.canAccessLogin()
    }
}