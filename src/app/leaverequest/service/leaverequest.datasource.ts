


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {LeaveRequest} from "./leaverequest";
import {LeaveRequestService} from "./leaverequest.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";



export class UsersDataSource implements DataSource<LeaveRequest> {

    private leaveRequestSubject = new BehaviorSubject<LeaveRequest[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private leaveRequestService: LeaveRequestService) {

    }

    loadUsers(filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.leaveRequestService.findLeaveRequests(filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(users => { this.leaveRequestSubject.next(users); console.log(users)});

    }

    connect(collectionViewer: CollectionViewer): Observable<LeaveRequest[]> {
        console.log("Connecting data source");
        return this.leaveRequestSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.leaveRequestSubject.complete();
        this.loadingSubject.complete();
    }

}

