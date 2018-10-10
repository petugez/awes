
import {ActivatedRoute} from '@angular/router';
import {MonthService} from '../service/monthview.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MonthDataSource} from '../service/monthview.datasource';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";

@Component({
  selector: 'company-list-view',
  templateUrl: './monthlistview.component.html',
  styleUrls: [ './monthlistview.component.css' ]
})
export class MonthListViewComponent implements OnInit,AfterViewInit {
  

  userSize:number =10;

  displayedColumns= ["id", "name","ownerName","ownerSurname"];
  dataSource: MonthDataSource;

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  @ViewChild(MatSort) 
  sort: MatSort;
  
  @ViewChild('input') 
  input: ElementRef;

  constructor(private route: ActivatedRoute,
    private monthService: MonthService) { }

    ngOnInit() {

      // this.course = this.route.snapshot.data["course"];

      this.dataSource = new MonthDataSource(this.monthService);

      this.dataSource.load( '', 'asc', 0, 3);

  } 

  ngAfterViewInit() {

      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      fromEvent(this.input.nativeElement,'keyup')
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
    this.dataSource.load(
        this.input.nativeElement.value,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize);
}
 
}
