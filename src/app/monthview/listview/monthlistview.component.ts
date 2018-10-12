
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
 
  months=[{name:"january"},{name:"february"},{name:"march"},{name:"april"},
  {name:"may"},{name:"june"},{name:"jule"},{name:"august"},
  {name:"september"},{name:"october"},{name:"november"},{name:"december"}];

  
  constructor(private route: ActivatedRoute,
    private monthService: MonthService) { }

    ngOnInit() {

      

  
  } 

  

  
}
