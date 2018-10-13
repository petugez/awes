
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

  user: User= new User();
  userId: Number;

  editable:boolean=false;

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      if (id!=='new'){
        this.userId =parseInt(id);
        this.loadUser();
      }
      else{
        this.editable=true;
      }

    });
  }

  loadUser() {
    this.userService.get(this.userId).subscribe(user => {
    this.user = user;
      console.log(this.user);
    });

  }

  onEditUser():void{
    this.editable=true;
  }
  onCancelEdit():void{
    this.editable=false;
    this.loadUser();
  }
  onSaveUser():void{
   this.userService.save(this.user).subscribe(user=>{
     this.user=user;
     this.userId=user.id;
     this.editable=false;
   });
  }
}
