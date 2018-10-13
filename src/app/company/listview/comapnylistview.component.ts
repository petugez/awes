
import { ActivatedRoute,Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CompaniesDataSource } from '../service/company.datasource';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";

@Component({
    selector: 'company-list-view',
    templateUrl: './companylistview.component.html',
    styleUrls: ['./companylistview.component.css']
})
export class CompanyListViewComponent implements OnInit, AfterViewInit {


    companySize: number = 10;


    displayedColumns = ["id", "name", "ownerName", "ownerSurname"];
    dataSource: CompaniesDataSource;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('input')
    input: ElementRef;

    constructor(private route: ActivatedRoute,private router: Router,
        private userService: CompanyService) { }

    ngOnInit() {

        // this.course = this.route.snapshot.data["course"];

        this.dataSource = new CompaniesDataSource(this.userService);

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
    selectCompany(row:any){
        console.log(row);
        this.router.navigate(['/company/'+row.id]); 
    }
    onCreateCompany():void{
        this.router.navigate(['/company/new']); 
    }

}
