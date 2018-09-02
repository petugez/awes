import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {User} from '../../user/service/user';

@Injectable()
export class AuthService {

    user:User;
    
    constructor(private http: HttpClient) { }

    public getCurrent():User {
        console.log('loading current user');
        return this.user;
    }
    
   public login():void{
    const url = `http://localhost:3000/currentuser`;
    this.http.get<User>(url).subscribe(user=>{this.user=user;});
   }
   public logout():void{
       this.user=null;
   }


}