
import { Component, OnInit,Input } from '@angular/core';

import { WeekService } from '../service/weekview.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {  WeekData } from '../service/weekview';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-day',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input()
  day={};
  

  

  constructor(private route: ActivatedRoute, private monthService: WeekService) {

  }

  ngOnInit() {
  
  }

  
}
