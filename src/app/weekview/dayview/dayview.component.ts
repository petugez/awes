
import { Component, OnInit,Input } from '@angular/core';

import { WeekService } from '../service/weekview.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {  Day } from '../service/weekview';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-day',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input()
  day:Day=new Day();
  

  constructor(private route: ActivatedRoute, private monthService: WeekService) {

  }

  ngOnInit() {
  
  }

  onDaySelected(day:Day){
    console.log(day);
  }
  
}
