import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { WeekData } from "./weekview";
import { WeekService } from "./weekview.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs/observable/of";


export class MonthDataSource implements DataSource<WeekData> {

    private monthSubject = new BehaviorSubject<WeekData[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private monthService: WeekService) {

    }

    load(filter: string,
        sortDirection: string,
        pageIndex: number,
        pageSize: number) {

        this.loadingSubject.next(true);

        this.monthService.findMonths(filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(users => { this.monthSubject.next(users); console.log(users) });

    }

    connect(collectionViewer: CollectionViewer): Observable<WeekData[]> {
        console.log("Connecting data source");
        return this.monthSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.monthSubject.complete();
        this.loadingSubject.complete();
    }

}

