import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { LeaveRequest } from './leaverequest';

@Injectable()
export class LeaveRequestService {


    constructor(private http: HttpClient) { }

    public get(id: Number): Observable<LeaveRequest> {
        console.log('loading user' + id);
        const url = `/api/user/${id}`;
        return this.http.get<LeaveRequest>(url);

    }

    save(leaveRequest: LeaveRequest): Observable<LeaveRequest> {

        if (leaveRequest.id == null) {
            return this.http.post<LeaveRequest>('/api/leaverequest/', leaveRequest).pipe(
                tap(
                    user => {
                        console.log(user);
                    },
                    error => { console.log(error) })
            )
                ;
        }
        else {
            return this.http.put<LeaveRequest>('/api/leaverequest/' + leaveRequest.id, leaveRequest).pipe(
                tap(
                    user => {
                        console.log(user);
                    },
                    error => { console.log(error) })
            )
                ;
        }


    }


    public findLeaveRequests(filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<LeaveRequest[]> {

        return this.http.get<LeaveRequest[]>('/api/leaverequests', {
            params: new HttpParams()

                .set('q', filter)
                .set('_order', sortOrder)
                .set('_page', pageNumber.toString())
                .set('_limit', pageSize.toString())
        });
    }

}