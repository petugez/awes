
import {ActivatedRoute} from '@angular/router';
import {WeekService} from '../service/weekview.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MonthDataSource} from '../service/weekview.datasource';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";

@Component({
  selector: 'company-list-view',
  templateUrl: './weeklistview.component.html',
  styleUrls: [ './weeklistview.component.css' ]
})
export class WeekListViewComponent implements OnInit {
 
  months=[{name:"january"},{name:"february"},{name:"march"},{name:"april"},
  {name:"may"},{name:"june"},{name:"jule"},{name:"august"},
  {name:"september"},{name:"october"},{name:"november"},{name:"december"}];

  
  constructor(private route: ActivatedRoute,
    private monthService: WeekService) { }

    ngOnInit() {

      

  
  } 

  

  
}
