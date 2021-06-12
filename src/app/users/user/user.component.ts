import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserActivate } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private routes : ActivatedRoute, private userA : UserActivate ) { }

  ngOnInit() {
    this.user = { id: +this.routes.snapshot.params['id'], name: this.routes.snapshot.params['name']};
    this.routes.params.subscribe((param:Params)=>{
      this.user = {
        id:+param['id'],
        name: param['name']
      }
    });
  }

  OnActivate(){
    this.userA.activatedButton.next(true);
  }


}
