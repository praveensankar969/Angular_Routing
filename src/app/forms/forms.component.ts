import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('f') form : NgForm;

  constructor() { }
  textArea = "";

  DefaultQuestion = 'pet';

  ngOnInit(): void {
  }

  suggestUserName() {
   this.textArea = 'Superuser';
  }

  onSubmit(){
    console.log(this.form);
    this.form.reset();
  }

}
