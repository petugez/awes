
import { ActivatedRoute,Router } from '@angular/router';
import { LeaveRequestService } from '../service/leaverequest.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersDataSource } from '../service/leaverequest.datasource';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";

@Component({
    selector: 'leaverequest-list-view',
    templateUrl: './leaverequestlistview.component.html',
    styleUrls: ['./leaverequestlistview.component.css']
})
export class LeaveRequestListViewComponent implements OnInit, AfterViewInit {


    leaveRequestSize: number = 10;

    displayedColumns = ["id","name","surname","from","to"];
    dataSource: UsersDataSource;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('input')
    input: ElementRef;

    constructor(private route: ActivatedRoute,private router:Router,
        private userService: LeaveRequestService) { }

    ngOnInit() {

        // this.course = this.route.snapshot.data["course"];

        this.dataSource = new UsersDataSource(this.userService);

        this.dataSource.loadUsers('', 'asc', 0, 3);

    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement, 'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadUsersPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadUsersPage())
            )
            .subscribe();

    }


    loadUsersPage() {
        this.dataSource.loadUsers(
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
    onSelectLeaveRequest(row:any){
        console.log(row);
        this.router.navigate(['/leaverequest/'+row.id]); 
    }
    onCreateLeaveRequest():void{
        this.router.navigate(['/leaverequest/new']); 
    }

}
