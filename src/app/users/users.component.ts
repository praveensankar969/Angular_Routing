import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserActivate } from './user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  activated:boolean = false;
  constructor(private userService : UserActivate) { }
  private sub:  Subscription;
  

  ngOnInit() {
    
    this.sub = this.userService.activatedButton.subscribe(data=>{
      this.activated = data;
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

 
}
