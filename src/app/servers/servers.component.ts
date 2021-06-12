import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserActivate } from '../users/user/user.service';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnDestroy {
  public servers: {id: number, name: string, status: string}[] = [];
  activated:boolean = false;
  constructor(private serversService: ServersService, private userService : UserActivate) { }
  private sub:  Subscription;
  

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.sub = this.userService.activatedButton.subscribe(data=>{
      this.activated = data;
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }



}
