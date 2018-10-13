
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
  week={ days: [{name:"sunday"},{name:"monday"},{name:"Tuesday"},{name:"Wednesday"},{name:"thursday"},{name:"Friday"},{name:"Saturnday"}]}  ;
  

  

  constructor(private route: ActivatedRoute, private monthService: WeekService) {

  }

  ngOnInit() {
  
  }

  
}
