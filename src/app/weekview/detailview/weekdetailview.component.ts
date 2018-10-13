
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
  

  

  constructor(private route: ActivatedRoute, private monthService: WeekService) {

  }

  ngOnInit() {
  
  }

  
}
