import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService {


    save(user: User): Observable<User> {


       return this.http.put<User>('/api/user/'+user.id, user).pipe(
        tap(
            user => {
                 console.log(user);
                }, 
            error => { console.log(error) })
       )
        ;

    }

    constructor(private http: HttpClient) { }

    public get(id: Number): Observable<User> {
        console.log('loading user' + id);
        const url = `/api/user/${id}`;
        return this.http.get<User>(url);

    }

    public findUsers(filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<User[]> {

        return this.http.get<User[]>('/api/users', {
            params: new HttpParams()

                .set('q', filter)
                .set('_order', sortOrder)
                .set('_page', pageNumber.toString())
                .set('_limit', pageSize.toString())
        });
        // .pipe(
        //     map(res => res["payload"])
        // );
    }

}