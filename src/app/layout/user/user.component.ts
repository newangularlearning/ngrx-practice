import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from './user.model';
import {map} from 'rxjs/operators'
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { getUserList, getUserListFailed, getUserListSuccess } from './user.actions';
import { selectUsers } from './user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apiService:ApiService,private store:Store<AppState>) { }
  users:User[];
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
  this.store.dispatch(getUserList());
  this.store.select(selectUsers).subscribe(users=>{this.users = users});

  
  if(this.users.length == 0){
    this.apiService.getData('/users').pipe(
      map(data=>data as User[]),
    ).subscribe(
      (users)=>{
        this.users = users;
        this.store.dispatch(getUserListSuccess({users}))
      },
      ((err)=>{
        this.store.dispatch(getUserListFailed());
      })
    )
  }
  
  }

}
