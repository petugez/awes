import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {User} from './user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    public get(id: Number):Observable<User> {
        console.log('loading user'+id);
        const url = `http://localhost:3000/user/${id}`;
        return this.http.get<User>(url);
        
    }

}