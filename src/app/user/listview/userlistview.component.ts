
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersDataSource } from '../service/user.datasource';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";

@Component({
    selector: 'user-list-view',
    templateUrl: './userlistview.component.html',
    styleUrls: ['./userlistview.component.css']
})
export class UserListViewComponent implements OnInit, AfterViewInit {


    userSize: number = 10;

    displayedColumns = ["id", "login"];
    dataSource: UsersDataSource;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('input')
    input: ElementRef;

    constructor(private route: ActivatedRoute,private router:Router,
        private userService: UserService) { }

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
    selectUser(row:any){
        console.log(row);
        this.router.navigate(['/user/'+row.id]); 
    }


}
