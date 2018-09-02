
import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { User } from '../service/user';

import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'user-detail-view',
  templateUrl: './userdetailview.component.html',
  styleUrls: ['./userdetailview.component.css']
})
export class UserDetailViewComponent implements OnInit {

  user: User;
  userId: Number;

  editable:boolean=true;

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.userId =parseInt(id);
      this.loadUser();
    });
  }

  loadUser() {
    this.userService.get(this.userId).subscribe(user => {
    this.user = user;
      console.log(this.user);
    });

  }

}
