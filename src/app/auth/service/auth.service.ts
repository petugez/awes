import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../user/service/user';

@Injectable()
export class AuthService {

    user: User;

    constructor(private http: HttpClient) { }

    public getCurrent(): User {
        console.log('loading current user');
        return this.user;
    }

    public login(): Observable<User> {
        const url = `http://localhost:3000/currentuser`;
        return this.http.get<User>(url).pipe(
            tap(
                user => {
                     this.user = user;
                     console.log(user);
                    }, 
                error => { console.log(error) })
        );
    }
    public logout(): void {
        this.user = null;
    }


}