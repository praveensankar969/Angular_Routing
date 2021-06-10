import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private routes : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.routes.snapshot.params['id']);
    this.routes.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(+param['id']);
    });
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo : this.routes, queryParamsHandling : 'preserve'});
  }

}
