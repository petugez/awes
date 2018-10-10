import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import { MonthData } from './monthview';

@Injectable()
export class MonthService {

    constructor(private http: HttpClient) { }

    public get(id: Number,subjectId: Number): Observable<MonthData> {
        console.log('loading company' + id);
        const url = `http://localhost:3000/month/${id}`;
        return this.http.get<MonthData>(url);

    }

    public findMonths( filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<MonthData[]> {

        return this.http.get<MonthData[]>('/api/companies', {
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