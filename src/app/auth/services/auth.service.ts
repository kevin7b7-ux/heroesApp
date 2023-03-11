import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { User } from '../interfaces/user.interface';
import { Observable, map, of, tap, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl = environment.baseUrl;
    private user?: User;
    // constructor(private http: HttpClient){}

    private http = inject(HttpClient)

    get currentUser(): User|undefined {
        if( !this.user) return undefined;
        return structuredClone(this.user);
    }

    login( email:string, password: string):Observable<User>{

        return this.http.get<User>(`${ this.baseUrl }/users/1`)
        .pipe(
            tap( user => {
                this.user = user;
                localStorage.setItem( 'token', 'f4as97a9g7s.4654654987.497897gsd' )
            })
        )

    }

    checkAuthentication(): Observable<boolean>{

        if ( !localStorage.getItem('token')) return of(false)

        const token = localStorage.getItem('token');

        return this.http.get<User>(`${ this.baseUrl }/users/1`)
        .pipe(
            tap( user => this.user = user),
            map( user => !!user ),
            catchError( err => of(false))
        )
    }

    logout(){
        this.user = undefined;
        localStorage.clear()
    }
}