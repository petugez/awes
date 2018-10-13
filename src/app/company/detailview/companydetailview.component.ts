
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

  company: Company=new Company();
  companyId: Number;

  editable: boolean = false;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      if( id!="new"){
        this.companyId = parseInt(id);
        this.loadCompany();  
      }
      else{
        this.editable=true;
      }
      
    });
  }

  loadCompany() {
    this.companyService.get(this.companyId).subscribe(company => {
      this.company = company;
      console.log(this.company);
    });

  }

  onEditCompany():void{
    this.editable=true;
  }
  onCancelEdit():void{
    this.editable=false;
    this.loadCompany();
  }
  onSaveCompany():void{
   this.companyService.save(this.company).subscribe(company=>{
     this.company=company;
     this.companyId=this.company.id;
     this.editable=false;
   });
  }

}
