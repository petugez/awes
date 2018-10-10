
import { Component, OnInit } from '@angular/core';

import { MonthService } from '../service/monthview.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {  MonthData } from '../service/monthview';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'company-detail-view',
  templateUrl: './monthdetailview.component.html',
  styleUrls: ['./monthdetailview.component.css']
})
export class MonthDetailViewComponent implements OnInit {

  company: MonthData;
  monthId: Number;

  editable: boolean = true;

  constructor(private route: ActivatedRoute, private monthService: MonthService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.monthId = parseInt(id);
      this.loadCompany();
    });
  }

  loadCompany() {
    this.monthService.get(this.monthId,null).subscribe(month => {
      this.company = month;
      console.log(this.company);
    });

  }

}
