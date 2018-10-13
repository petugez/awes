
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
export class MonthListViewComponent implements OnInit {
 
  months=[{id:1,name:"january"},{id:2,name:"february"},{id:4,name:"march"},{id:4,name:"april"},
  {id:5,name:"may"},{id:6,name:"june"},{id:7,name:"jule"},{id:8,name:"august"},
  {id:9,name:"september"},{id:10, name:"october"},{id:11, name:"november"},{id:12, name:"december"}];

  
  constructor(private route: ActivatedRoute,
    private monthService: MonthService) { }

    ngOnInit() {

      

  
  } 

  

  
}
