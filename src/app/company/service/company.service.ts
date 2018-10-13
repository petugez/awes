import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Company } from './company';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class CompanyService {
    save(company: Company): Observable<Company> {

        if (company.id == null) {
            return this.http.post<Company>('/api/company/', company).pipe(
                tap(
                    user => {
                        console.log(user);
                    },
                    error => { console.log(error) })
            )
                ;
        }
        else {
            return this.http.put<Company>('/api/company/' + company.id, company).pipe(
                tap(
                    user => {
                        console.log(user);
                    },
                    error => { console.log(error) })
            )
                ;
        }


    }

    constructor(private http: HttpClient) { }

    public get(id: Number): Observable<Company> {
        console.log('loading company' + id);
        const url = `/api/company/${id}`;
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