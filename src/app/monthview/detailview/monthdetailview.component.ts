
import { Component, OnInit,Input } from '@angular/core';

import { MonthService } from '../service/monthview.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {  MonthData } from '../service/monthview';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-month',
  templateUrl: './monthdetailview.component.html',
  styleUrls: ['./monthdetailview.component.scss']
})
export class MonthDetailViewComponent implements OnInit {

  @Input()
  month: MonthData;
  

  

  constructor(private route: ActivatedRoute, private monthService: MonthService) {

  }

  ngOnInit() {
  
  }

  
}
