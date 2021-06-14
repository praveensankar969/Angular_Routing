import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

import {StaffDTO} from './staffDTO'

@Component({
  selector: 'app-http-modules',
  templateUrl: './http-modules.component.html',
  styleUrls: ['./http-modules.component.css']
})
export class HttpModulesComponent implements OnInit {
  @ViewChild('postForm') formValue : NgForm;
  loadedPosts : StaffDTO[] = [];
  userId: number = 0;
  deleteClicked : boolean = false;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get("https://localhost:5001/api/Staff").pipe(map(data=>{
      const posts:StaffDTO[] = [];
      for(const d in data){
        posts.push(data[d]);
      }
      return posts;
    })).subscribe(res =>{
      this.loadedPosts = res;
    });
  }

  onCreatePost(){
    this.http.post("https://localhost:5001/api/Staff/addStaff", this.formValue.value, {responseType: 'text'}).subscribe(res =>{
      console.log(res);
    });
  }

  onFetchPosts(){
    this.http.get("https://localhost:5001/api/Staff").pipe(map(data=>{
      const posts:StaffDTO[] = [];
      for(const d in data){
        posts.push(data[d]);
      }
      return posts;
    })).subscribe(res =>{
      this.loadedPosts = res;
    });
  }

  onClearPosts(){
    this.deleteClicked=true;
    this.http.delete("https://localhost:5001/api/Staff/"+this.userId, {responseType: 'text'}).subscribe(res=>{
      console.log(res);
    });
  }

  onClear(){
    this.deleteClicked=true;
  }
}
