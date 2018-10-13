import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import { WeekData } from './weekview';

@Injectable()
export class WeekService {

    constructor(private http: HttpClient) { }

    public get(id: Number,subjectId: Number): Observable<WeekData> {
        console.log('loading company' + id);
        const url = `http://localhost:3000/month/${id}`;
        return this.http.get<WeekData>(url);

    }

    public findMonths( filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<WeekData[]> {

        return this.http.get<WeekData[]>('/api/companies', {
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