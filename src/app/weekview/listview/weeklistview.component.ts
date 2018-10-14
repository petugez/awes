
import { ActivatedRoute } from '@angular/router';
import { WeekService } from '../service/weekview.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MonthDataSource } from '../service/weekview.datasource';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";

@Component({
  selector: 'company-list-view',
  templateUrl: './weeklistview.component.html',
  styleUrls: ['./weeklistview.component.css']
})
export class WeekListViewComponent implements OnInit {

  months = [{ name: "january" }, { name: "february" }, { name: "march" }, { name: "april" },
  { name: "may" }, { name: "june" }, { name: "jule" }, { name: "august" },
  { name: "september" }, { name: "october" }, { name: "november" }, { name: "december" }];


  years: any = [{ id: 1, number: "2011" }, { id: 2, number: "2012" }, { id: 3, number: "2013" }, { id: 4, number: "2014" }, { id: 5, number: "2015" }, { id: 6, number: "2016" }, { id: 7, number: "2017" }, { id: 8, number: "2018" }, { id: 8, number: "2019" }];

  subjects = [{ id: 1, type: "employee", name: "Jozko Mrkva" }, { id: 1, type: "company", name: "Ovocie ltd." }]

  yearSelected: any = {};
  subjectSelected: any = {};


  constructor(private route: ActivatedRoute,
    private monthService: WeekService) { }

  ngOnInit() {

  }

  onYearSelected(): void {
    console.log("year selected")
  }

  onSubjectSelected(): void {
    console.log("subject selected")
  }



}
