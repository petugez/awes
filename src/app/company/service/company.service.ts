import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import { Company } from './company';

@Injectable()
export class CompanyService {

    constructor(private http: HttpClient) { }

    public get(id: Number): Observable<Company> {
        console.log('loading company' + id);
        const url = `http://localhost:3000/company/${id}`;
        return this.http.get<Company>(url);

    }

    public findCompanies( filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<Company[]> {

        return this.http.get<Company[]>('/api/companies', {
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