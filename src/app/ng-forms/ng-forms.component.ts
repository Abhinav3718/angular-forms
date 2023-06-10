import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.scss']
})
export class NgFormsComponent implements OnInit {

  @ViewChild('form')
  public form!: NgForm;

  ngOnInit(): void {
    
  }
  onSubmitForm(form: NgForm) {
    console.log(form);
    console.log(this.form);
  }
}
