import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  editMode = false;
  constructor(private serversService: ServersService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((qParam:Params)=>{
      this.editMode = qParam['allowEdit'] === '1'? true:false;
      console.log(this.editMode['allowEdit']);
    });
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params)=>{
      this.server = this.serversService.getServer(+params['id']);
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
