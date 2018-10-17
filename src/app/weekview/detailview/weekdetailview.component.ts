
import { Component, OnInit,Input } from '@angular/core';

import { WeekService } from '../service/weekview.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {  WeekData } from '../service/weekview';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-week',
  templateUrl: './weekdetailview.component.html',
  styleUrls: ['./weekdetailview.component.scss']
})
export class WeekDetailViewComponent implements OnInit {

  @Input()
  days=[{name:"Sunday",number:1},{name:"Monday",number:2},{name:"Tuesday",number:3},{name:"Wednesday",number:4},{name:"Thursday",number:5},{name:"Friday",number:6},{name:"Saturnday",number:7}]  ;
  weeks=[{id:1,number:"40"},{id:2,number:"41"},{id:3,number:"42"},{id:4,number:"43"},{id:5,number:"44"}]


  years:any=[{id:1,number:"2011"},{id:2,number:"2012"},{id:3,number:"2013"},{id:4,number:"2014"},{id:5,number:"2015"},{id:6,number:"2016"},{id:7,number:"2017"},{id:8,number:"2018"},{id:8,number:"2019"}];
 
  subjects=[{id:1,type:"employee",name:"Jozko Mrkva"},{id:1,type:"company",name:"Ovocie ltd."}]

  yearSelected:any={};
  subjectSelected:any={};
  

  constructor(private route: ActivatedRoute, private monthService: WeekService) {
    // MomentDateAdapter moment=new MomentDateAdapter();
    
  }

  ngOnInit() {
  
  
  }

  // onDaySelected(day:Day):void{
  //   console.log(day);
  // }

  onYearSelected():void{
    console.log("year selected")
  }

  onSubjectSelected():void{
    console.log("subject selected")
  }


  
}
