
import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../service/company.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Company } from '../service/company';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'company-detail-view',
  templateUrl: './companydetailview.component.html',
  styleUrls: ['./companydetailview.component.css']
})
export class CompanyDetailViewComponent implements OnInit {

  company: Company;
  companyId: Number;

  editable: boolean = true;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.companyId = parseInt(id);
      this.loadCompany();
    });
  }

  loadCompany() {
    this.companyService.get(this.companyId).subscribe(company => {
      this.company = company;
      console.log(this.company);
    });

  }

}
