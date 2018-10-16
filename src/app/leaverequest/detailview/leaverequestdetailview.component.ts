
import { Component, OnInit } from '@angular/core';

import { LeaveRequestService } from '../service/leaverequest.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { LeaveRequest, LeaveRequestType } from '../service/leaverequest';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'leaverequest-detail-view',
  templateUrl: './leaverequestdetailview.component.html',
  styleUrls: ['./leaverequestdetailview.component.css']
})
export class LeaveRequestDetailViewComponent implements OnInit {

  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveRequestId: Number;
  types: LeaveRequestType[]= [];

  editable: boolean = false;

  constructor(private route: ActivatedRoute, private leaveRequestService: LeaveRequestService) {
   
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      if (id !== 'new') {
        this.leaveRequestId = parseInt(id);
        this.loadLeaveRequest();
      }
      else {
        this.editable = true;
      }
      this.leaveRequestService.getLeaveRequestTypes().subscribe(types=>{this.types=types});
    });
  }

  loadLeaveRequest() {
    this.leaveRequestService.get(this.leaveRequestId).subscribe(leaveRequest => {
      this.leaveRequest = leaveRequest;
      console.log(this.leaveRequest);
    });

  }

  onEditLeaveRequest(): void {
    this.editable = true;
  }
  onCancelEdit(): void {
    this.editable = false;
    this.loadLeaveRequest();
  }
  onSaveLeaveRequest(): void {
    this.leaveRequestService.save(this.leaveRequest).subscribe(leaveRequest => {
      this.leaveRequest = leaveRequest;
      this.leaveRequestId = leaveRequest.id;
      this.editable = false;
    });
  }
}
