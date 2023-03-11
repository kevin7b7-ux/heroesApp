import { Injectable, inject } from '@angular/core';
import { Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {

  constructor() { }
  private authService = inject(AuthService)
  private authorizationService = inject(AuthorizationService)
  
  getRoutes(route:string): boolean{
    
    let currentUser = this.authService.currentUser
    if( !currentUser ) return false;

    let routes = this.authorizationService.getRoutesByRole( currentUser.rol )
    let inRoutes: boolean = false;
    routes.map(
      r => {
        if( r.includes(route)){
         inRoutes = true
         return
        }
      }
    )
    console.log(routes, route)
    return inRoutes

  }

  canMatch(route: Route): boolean  | Observable<boolean> {
   
   return this.getRoutes( route.path! )
    
}
// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

// }
}
