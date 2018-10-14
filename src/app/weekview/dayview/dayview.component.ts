
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
  
  years:any=[{id:1,number:"2011"},{id:2,number:"2012"},{id:3,number:"2012"},{id:4,number:"2013"},{id:5,number:"2014"},{id:6,number:"2015"},{id:7,number:"2016"},{id:8,number:"2017"},{id:8,number:"2018"}];
 
  subjects=[{id:1,type:"employee",name:"Jozko Mrkva"},{id:1,type:"company",name:"Ovocie ltd."}]

  yearSelected:any={};
  subjectSelected:any={};


  constructor(private route: ActivatedRoute, private monthService: WeekService) {

  }

  ngOnInit() {
  
  }

  onDaySelected(day:Day):void{
    console.log(day);
  }

  onYearSelected():void{
    console.log("year selected")
  }

  onSubjectSelected():void{
    console.log("subject selected")
  }

  
}
