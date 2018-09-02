import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'user-detail-view',
  templateUrl: './userdetailview.component.html',
  styleUrls: [ './userdetailview.component.css' ]
})
export class UserDetailViewComponent implements OnInit {
  
  options: FormGroup;

  ngOnInit(){
    
  }
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
 
}
